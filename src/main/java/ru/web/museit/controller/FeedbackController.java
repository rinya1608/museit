package ru.web.museit.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.web.museit.request.FeedbackRequest;

@RestController
public class FeedbackController {
    @PostMapping(path = "api/feedback")
    public ResponseEntity<?> sendFeedback(@ModelAttribute FeedbackRequest feedbackRequest) {
        System.out.println(feedbackRequest);
        return ResponseEntity.ok().build();
    }
}
