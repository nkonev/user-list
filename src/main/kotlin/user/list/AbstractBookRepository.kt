package user.list

import io.micronaut.data.annotation.GeneratedValue
import io.micronaut.data.annotation.Id
import io.micronaut.data.annotation.Repository
import io.micronaut.data.repository.CrudRepository

data class Book(@Id
                @GeneratedValue
                var id: Long?,
                var title: String,
                var pages: Int = 0)

@Repository
interface BookRepository: CrudRepository<Book, Long> {

}