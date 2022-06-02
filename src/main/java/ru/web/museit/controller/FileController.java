package ru.web.museit.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.web.museit.request.FileRequest;
import ru.web.museit.response.MessageResponse;
import ru.web.museit.service.FileService;

@RestController
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;

    @PostMapping(path = "api/upload/file", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<?> uploadFile(@ModelAttribute FileRequest fileRequest) {
        ByteArrayResource byteArrayResource = fileService.processFile(fileRequest);

        if (byteArrayResource != null) {
            HttpHeaders header = new HttpHeaders();
            header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileRequest.getFile().getOriginalFilename());
            header.add("Cache-Control", "no-cache, no-store, must-revalidate");
            header.add("Pragma", "no-cache");
            header.add("Expires", "0");

            return ResponseEntity.ok()
                    .headers(header)
                    .contentLength(byteArrayResource.contentLength())
                    .contentType(MediaType.valueOf(MediaType.APPLICATION_OCTET_STREAM_VALUE))
                    .body(byteArrayResource);
        }
        return ResponseEntity.badRequest()
                .body(MessageResponse.withText("upload File Failed"));
    }
}