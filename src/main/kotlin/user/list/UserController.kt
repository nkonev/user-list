package user.list

import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.*
import javax.annotation.PostConstruct
import javax.inject.Inject


@Controller("/user")
open class UserController {

    @Inject
    private lateinit var r: UserRepository

    private val LOG = loggerFor(javaClass)

    @PostConstruct
    fun pc() {
        LOG.info("HelloController")
    }

    @Produces(MediaType.APPLICATION_JSON)
    @Post("/")
    fun create(@Body userDto: UserDto): HttpResponse<UserDto> {
        var u : User = userDto.toInsertableUser()
        u = r.save(u)
        return HttpResponse.ok(u.toUserDto())
    }

    @Get("/")
    @Produces(MediaType.APPLICATION_JSON)
    fun read(): List<UserDto?> {
        val findResult = r.findAll().map { user: User? -> user?.toUserDto() }.toList()
        return findResult
    }
}