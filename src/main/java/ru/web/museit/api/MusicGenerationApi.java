package ru.web.museit.api;

import org.springframework.stereotype.Component;

public interface MusicGenerationApi {
    byte[] sendFile(byte[] fileBytes, String filename, String generatorStyle);
}
