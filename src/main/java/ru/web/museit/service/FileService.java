package ru.web.museit.service;

import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.web.museit.api.MusicAIGenerationApi;

import java.io.InputStream;

@Service
@RequiredArgsConstructor
public class FileService {
    private final static Logger LOG = LogManager.getLogger(FileService.class);

    private final MusicAIGenerationApi musicAIGenerationApi;

    public ByteArrayResource processFile(MultipartFile file) {
        try {
            InputStream inputStreamFile = musicAIGenerationApi.sendFile(file.getBytes(), file.getOriginalFilename());
            byte[] fileBytes = inputStreamFile.readAllBytes();
            LOG.log(Level.INFO, "File processing success");
            return new ByteArrayResource(fileBytes);
        } catch (Exception e) {
            LOG.log(Level.ERROR, "A exception while process file", e);
            return null;
        }
    }
}
