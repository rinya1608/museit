package ru.web.museit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan("ru.web.museit.property")
public class MuseitApplication {

    public static void main(String[] args) {
        SpringApplication.run(MuseitApplication.class, args);
    }

}
