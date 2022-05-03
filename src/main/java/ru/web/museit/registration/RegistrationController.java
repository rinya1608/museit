package ru.web.museit.registration;

import javax.mail.MessagingException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
// @RequestMapping(path = "api/register")
@AllArgsConstructor
public class RegistrationController {

    // @PostMapping(path = "api/register")
    // public ResponseEntity<?> sendreFeedback(@ModelAttribute RegistrationRequest feedbackRequest) throws MessagingException {
    //     System.out.println(feedbackRequest);
    //     System.out.println("check");
    //     return ResponseEntity.ok("Ответ");
    // }
    private RegistrationSevice registrationService;
        
    @PostMapping(path = "api/register")
    public String register(@ModelAttribute RegistrationRequest request){
        System.out.println(request);
        return registrationService.register(request);
    }
}