package user.list

import io.micronaut.context.annotation.Factory
import javax.inject.Singleton

@Factory
class SuperFactory {
    @Singleton
    fun novel(): Book0 {
        return Book0("A Great Novel")
    }
}

data class Book0(val name: String) {

}