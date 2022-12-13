package ru.web.museit.dto.request;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@Data
@RequiredArgsConstructor
@ToString
public class FileRequest {
    private String generatorStyle;
    private MultipartFile file;
}
