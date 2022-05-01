package ru.web.museit.request;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Data
@RequiredArgsConstructor
@ToString
public class RegisterRequest {
    private String login;
    private String password;
}
