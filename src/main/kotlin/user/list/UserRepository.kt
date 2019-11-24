package user.list

import io.micronaut.data.jdbc.annotation.JdbcRepository
import io.micronaut.data.repository.CrudRepository
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Table(name = "users")
@Entity
data class User(@Id
                @GeneratedValue
                var id: Long,
                var name: String,
                var surname: String)

data class UserDto(val id: Long, val surname: String, val name: String){}

@JdbcRepository
interface UserRepository: CrudRepository<User, Long> {

}

fun User.toUserDto() = UserDto(
        id = id,
        name = name,
        surname = surname
)

fun UserDto.toUser() = User(
        id = id,
        name = name,
        surname = surname
)

fun UserDto.toInsertableUser() = User(
        id = 0,
        name = name,
        surname = surname
)