package ru.web.museit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor(staticName = "withText")
@Data
public class MessageResponse {
    private String message;
}
