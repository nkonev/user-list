```bash
mn create-app -l kotlin -f flyway,jdbc-hikari,kotlintest,logback,http-server user-list
```

rm dependency micronaut-client which uses reactive-java

https://guides.micronaut.io/micronaut-spa-react/guide/

Test
```bash
curl -v -H "Content-Type: application/json" -X POST -d '{"name":"Nikita", "surname":"Konev"}'  http://localhost:8080/user
```