package ru.web.museit.property;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author Yarullin Renat
 */
@Data
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private Jwt jwt = new Jwt();

    @Data
    public static class Jwt {
        private String secret;
        private Long expirationMs;
        private Long refreshExpirationMs;
    }
}
