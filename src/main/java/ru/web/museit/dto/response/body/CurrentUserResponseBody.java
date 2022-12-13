package ru.web.museit.dto.response.body;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CurrentUserResponseBody {
    private String email;
    private String name;
}