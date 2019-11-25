package user.list

import io.micronaut.http.HttpRequest
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.annotation.MicronautTest
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Test
import javax.inject.Inject

@MicronautTest
open class UserControllerTest{
    @Inject
    @field:Client("/")
    var client: HttpClient? = null

    @Test
    open fun testPostUser() {
        val result: UserDto = client!!.toBlocking()
                .retrieve(HttpRequest.POST<UserDto>("/user", UserDto(id=0, name = "Nikita", surname = "Konev")), UserDto::class.java)
        assertNotNull(result.id)
    }
}