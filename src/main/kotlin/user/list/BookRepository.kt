package user.list

import io.micronaut.data.jdbc.annotation.JdbcRepository
import io.micronaut.data.repository.CrudRepository


@JdbcRepository
interface BookRepository: CrudRepository<Book, Long> {
    fun find(name: String): Book
}