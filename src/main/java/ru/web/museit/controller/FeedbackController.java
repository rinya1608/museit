package ru.web.museit.controller;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.web.museit.dto.request.FeedbackRequest;
import ru.web.museit.service.SendEmail;

@RestController
public class FeedbackController {

    @Autowired
    private SendEmail sendEmail;

    @PostMapping(path = "api/feedback")
    public ResponseEntity<?> sendFeedback(@ModelAttribute FeedbackRequest feedbackRequest) throws MessagingException {
        System.out.println(feedbackRequest);
        sendEmail.sendMailWithFile(
            feedbackRequest.getName(),
            feedbackRequest.getContact(),
            feedbackRequest.getMessage(), 
            feedbackRequest.getSourceFile(),
            feedbackRequest.getProcessedFile(),
            "Отзыв от пользователя"
        );
        System.out.println(feedbackRequest.getSourceFile());
        return ResponseEntity.ok().build();
    }
}
