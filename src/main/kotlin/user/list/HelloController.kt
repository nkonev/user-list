package user.list

import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces
import io.micronaut.http.annotation.Controller
import javax.annotation.PostConstruct
import javax.inject.Inject


@Controller("/hello")
open class HelloController {

    @Inject
    private lateinit var g: GreetingService2

    @Inject
    private lateinit var r: BookRepository

    private val LOG = loggerFor(javaClass)

    @PostConstruct
    fun pc() {
        LOG.info("HelloController")
    }

    @Produces(MediaType.TEXT_PLAIN)
    @Get("/{name}")
    fun hello(name: String): HttpResponse<String> {
        var b : Book = Book(name = name, pages = 100, id = null)
        r.save(b)
        return HttpResponse.ok(g.getHello(name))
    }

    @Get("/")
    @Produces(MediaType.TEXT_PLAIN)
    fun index(): List<Book> {
        val findByPagesGreaterThan = r.findByPagesGreaterThan(90)
        return findByPagesGreaterThan
    }
}