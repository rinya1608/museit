package ru.web.museit.api;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class MusicGenerationApiMock implements MusicGenerationApi {
    @Override
    public byte[] sendFile(byte[] fileBytes, String filename, String generatorStyle) {
        return fileBytes;
    }
}
