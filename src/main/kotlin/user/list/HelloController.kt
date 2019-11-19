package user.list

import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Produces
import io.micronaut.http.annotation.Controller
import javax.inject.Inject


@Controller("/hello")
open class HelloController {

    @Inject
    private lateinit var g: GreetingService2;

    @Produces(MediaType.TEXT_PLAIN)
    @Get("/{name}")
    fun hello(name: String): HttpResponse<String> {
        return HttpResponse.ok(g.getHello(name))
    }
}