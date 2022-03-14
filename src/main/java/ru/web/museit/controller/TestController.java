package ru.web.museit.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.web.museit.response.MessageBody;

@RestController
public class TestController {

    @GetMapping("api/hello")
    public ResponseEntity<?> helloWorld(){
        return ResponseEntity.ok(MessageBody.of("hello world!"));
    }
}