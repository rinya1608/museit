package ru.web.museit.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.web.museit.dto.request.AuthRequest;
import ru.web.museit.dto.request.RegistrationRequest;
import ru.web.museit.dto.request.TokenRefreshRequest;
import ru.web.museit.dto.response.GeneralResponse;
import ru.web.museit.dto.response.body.CurrentUserResponseBody;
import ru.web.museit.service.UserService;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authUser(@RequestBody AuthRequest authRequest) {
        GeneralResponse<?> response = userService.authUser(authRequest);
        return response.success() ? ResponseEntity.ok(response) : ResponseEntity.badRequest().body(response);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationRequest request) {
        GeneralResponse<?> res = userService.registerUser(request);
        return res.success() ? ResponseEntity.ok(res) : ResponseEntity.badRequest().body(res);
    }

    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshToken(@RequestBody TokenRefreshRequest token) {
        var response = userService.refreshToken(token);
        return response.success() ? ResponseEntity.ok(response) : ResponseEntity.badRequest().body(response);
    }

    @GetMapping("/currentuser")
    public ResponseEntity<?> getCurrentUser(HttpServletRequest request) {
        GeneralResponse<CurrentUserResponseBody> response = userService.getCurrentUser(request);
        return response.success() ? ResponseEntity.ok(response) : ResponseEntity.badRequest().body(response);
    }
}
