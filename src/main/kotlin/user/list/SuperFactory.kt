package user.list

import io.micronaut.context.annotation.Factory
import javax.inject.Singleton

@Factory
class SuperFactory {
    @Singleton
    fun novel(): Book {
        return Book("A Great Novel")
    }
}

data class Book(val name: String) {

}