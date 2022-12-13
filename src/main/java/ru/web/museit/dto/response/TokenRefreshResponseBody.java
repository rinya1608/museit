package ru.web.museit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author Yarullin Renat
 */
@Data
@AllArgsConstructor
public class TokenRefreshResponseBody {
    private String accessToken;
    private String refreshToken;
}
