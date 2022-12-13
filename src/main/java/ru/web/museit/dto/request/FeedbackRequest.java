package ru.web.museit.dto.request;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@Data
@RequiredArgsConstructor
@ToString
public class FeedbackRequest {
    private String name;
    private String contact;
    private String message;
    private MultipartFile sourceFile;
    private MultipartFile processedFile;
}
