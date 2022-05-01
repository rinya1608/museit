package ru.web.museit.controller;

import javax.mail.MessagingException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.web.museit.request.RegisterRequest;

@RestController
public class RegistrationController {

    @PostMapping(path = "api/register")
    public ResponseEntity<?> sendFeedback(@ModelAttribute RegisterRequest feedbackRequest) throws MessagingException {
        System.out.println(feedbackRequest);
        return ResponseEntity.ok().build();
    }
}