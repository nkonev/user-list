package user.list

import javax.persistence.*

@Table(name = "books")
@Entity
data class Book(@Id
                @GeneratedValue
                var id: Long?,
                var name: String,
                var pages: Int = 0)
