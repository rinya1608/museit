package ru.web.museit.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor(staticName = "withText")
@Data
public class MessageResponse {
    private String message;
}
