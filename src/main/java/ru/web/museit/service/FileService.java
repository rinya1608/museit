package ru.web.museit.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.web.museit.api.MusicAIGenerationApi;

@Service
@RequiredArgsConstructor
@Log4j2
public class FileService {

    private final MusicAIGenerationApi musicAIGenerationApi;

    public ByteArrayResource processFile(MultipartFile file) {
        try {
            byte[] fileBytes = musicAIGenerationApi.sendFile(file.getBytes(), file.getOriginalFilename());
            log.info("File processing success");
            return new ByteArrayResource(fileBytes);
        } catch (Exception e) {
            log.error("A exception while process file", e);
            return null;
        }
    }
}
