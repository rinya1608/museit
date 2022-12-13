package ru.web.museit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import ru.web.museit.property.AppProperties;

@SpringBootApplication
@ConfigurationPropertiesScan("ru.web.museit.property")
@EnableConfigurationProperties({AppProperties.class})
public class MuseitApplication {

    public static void main(String[] args) {
        SpringApplication.run(MuseitApplication.class, args);
    }

}
