package ru.web.museit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class SendEmail {

    @Autowired
    private JavaMailSender javaMailSender;
    
    public void sendMailWithFile(String name,
                                 String contact,
                                 String body,
                                 MultipartFile source_file,
                                 MultipartFile processed_file,
                                 String subject) throws MessagingException{
        
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper =  new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED);

        String full_text = new StringBuilder()
        .append("Имя пользователя: " + name + "\n")
        .append("email/телефон: " + contact + "\n")
        .append("\n")
        .append(body)
        .toString();

        mimeMessageHelper.setFrom("museitcorp@gmail.com");
        mimeMessageHelper.setTo("vitaliyf.108@gmail.com");
        mimeMessageHelper.setText(full_text, false);
        mimeMessageHelper.setSubject(subject);
        mimeMessageHelper.addAttachment("source_file.mid", source_file);
        mimeMessageHelper.addAttachment("processed_file.mid", processed_file);

        javaMailSender.send(mimeMessage);

        System.out.println("Mail sended!");
                                
    }
}
