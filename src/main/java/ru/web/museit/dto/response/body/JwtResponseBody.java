package ru.web.museit.dto.response.body;

import lombok.AllArgsConstructor;
import lombok.Data;
import ru.web.museit.entity.User;

import java.lang.annotation.Annotation;

/**
 * @author Yarullin Renat
 */
@Data
@AllArgsConstructor
public class JwtResponseBody {
    private String accessToken;
    private String refreshToken;
    private User user;
}
