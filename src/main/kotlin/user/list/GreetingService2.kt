package user.list

import io.micronaut.context.annotation.Context
import javax.annotation.PostConstruct
import javax.inject.Inject

@Context
class GreetingService2 {

    private val LOG = loggerFor(javaClass)

    @Inject
    private lateinit var b :Book0

    @PostConstruct
    fun pc() {
        LOG.info("Constructing GreetingService, please read $b")
    }

    fun getHello(name: String): String {
        return "Hello, $name!"
    }

}