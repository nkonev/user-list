package user.list

import io.micronaut.runtime.Micronaut
import org.slf4j.LoggerFactory

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
                .packages("user.list")
                .mainClass(Application.javaClass)
                .start()
    }
}

fun <T> loggerFor(clazz: Class<T>) = LoggerFactory.getLogger(clazz)