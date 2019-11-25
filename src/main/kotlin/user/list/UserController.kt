package user.list

import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.*
import java.util.*
import javax.annotation.PostConstruct
import javax.inject.Inject

@Controller
open class HelloController {
    @Get("/hello/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    fun readById(@Part("name") name: String): String {
        return "Hello, " + name
    }

}

@Controller("/user")
open class UserController {

    @Inject
    private lateinit var r: UserRepository

    private val LOG = loggerFor(javaClass)

    @PostConstruct
    fun pc() {
        LOG.info("UserController2")
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/")
    fun create(@Body userDto: UserDto): HttpResponse<UserDto> {
        var u : User = userDto.toInsertableUser()
        u = r.save(u)
        return HttpResponse.ok(u.toUserDto())
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Patch("/")
    fun update(@Body userDto: UserDto): HttpResponse<UserDto> {
        var u : User = userDto.toUser()
        u = r.update(u)
        return HttpResponse.ok(u.toUserDto())
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Delete("/{id}")
    fun update(@Part("id") id: Long): HttpResponse<UserDto> {
        r.deleteById(id)
        return HttpResponse.ok()
    }

    @Get("/")
    @Produces(MediaType.APPLICATION_JSON)
    fun read(): List<UserDto?> {
        val findResult = r.findAll().map { user: User? -> user?.toUserDto() }.toList()
        return findResult
    }

    @Get("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun readById(@Part("id") id: Long): Optional<UserDto> {
        val findResult = r.findById(id).map { user: User -> user.toUserDto() }
        return findResult
    }

}