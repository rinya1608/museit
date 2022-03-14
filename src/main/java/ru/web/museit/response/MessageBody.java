package ru.web.museit.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor(staticName = "of")
@Data
public class MessageBody {
    private String text;
}
