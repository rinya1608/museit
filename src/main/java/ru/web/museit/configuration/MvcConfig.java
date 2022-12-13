package ru.web.museit.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Yarullin Renat
 */

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    private static final String FORWARD = "forward:/";

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/{x:[\\w\\-]+}")
                .setViewName(FORWARD);
    }
}
