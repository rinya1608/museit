package ru.web.museit.property;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "museit.api")
public class ApiProperties {
    private MusicGeneration musicGeneration = new MusicGeneration();

    @Data
    public static class MusicGeneration{
        private String url;
    }
}
