package user.list

import io.micronaut.runtime.Micronaut

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
                .packages("user.list")
                .mainClass(Application.javaClass)
                .start()
    }
}