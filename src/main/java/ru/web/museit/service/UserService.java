package ru.web.museit.service;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.web.museit.configuration.jwt.JwtHelper;
import ru.web.museit.configuration.jwt.JwtTokenFilter;
import ru.web.museit.dto.request.AuthRequest;
import ru.web.museit.dto.request.RegistrationRequest;
import ru.web.museit.dto.request.TokenRefreshRequest;
import ru.web.museit.dto.response.GeneralResponse;
import ru.web.museit.dto.response.MessageResponse;
import ru.web.museit.dto.response.TokenRefreshResponseBody;
import ru.web.museit.dto.response.body.CurrentUserResponseBody;
import ru.web.museit.dto.response.body.JwtResponseBody;
import ru.web.museit.entity.RefreshToken;
import ru.web.museit.entity.User;
import ru.web.museit.error.ErrorDtoConst;
import ru.web.museit.repository.UserRepository;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtHelper jwtHelper;
    private final JwtTokenFilter jwtTokenFilter;
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService tokenService;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void addUser(RegistrationRequest request) {
        userRepository.save(new User(request.getEmail(), request.getName(), passwordEncoder.encode(request.getPassword())));
    }

    public User findByJwt(String jwt) {
        return findByEmail(jwtHelper.getUserNameFromJwtToken(jwt));
    }

    public User parseAndFindByJwt(String jwt) {
        return findByJwt(jwtHelper.parseJwt(jwt));
    }

    public GeneralResponse<CurrentUserResponseBody> getCurrentUser(HttpServletRequest req) {
        GeneralResponse<CurrentUserResponseBody> response = new GeneralResponse<>();
        try {
            String token = jwtTokenFilter.parseRequestJwt(req);
            String email = jwtHelper.getUserNameFromJwtToken(token);
            User user = userRepository.findByEmail(email);
            return response.withData(new CurrentUserResponseBody(user.getEmail(), user.getName()));
        } catch (ExpiredJwtException e) {
            return response.withError(ErrorDtoConst.TOKEN_02);
        }
    }

    public GeneralResponse<?> authUser(AuthRequest request) {
        try {
            User user1 = userRepository.findByEmail(request.getEmail());
            if (user1 == null)
                return new GeneralResponse<>().withError(ErrorDtoConst.AUTH_01);
            else {
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

                SecurityContextHolder.getContext().setAuthentication(authentication);

                String jwt = jwtHelper.generateJwtToken(authentication);

                User user = (User) authentication.getPrincipal();

                RefreshToken refreshToken = tokenService.createRefreshToken(user);

                return new GeneralResponse<>().withData(new JwtResponseBody(jwt, refreshToken.getToken(), user));
            }
        } catch (BadCredentialsException e) {
            return new GeneralResponse<>().withError(ErrorDtoConst.AUTH_02);
        }
    }

    public GeneralResponse<?> registerUser(RegistrationRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return new GeneralResponse<>().withError(ErrorDtoConst.REG_01);
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return new GeneralResponse<>().withError(ErrorDtoConst.REG_02);
        }

        addUser(request);
        return new GeneralResponse<>().withData(MessageResponse.withText("Пользовател успешно зарегистрирован"));
    }

    public GeneralResponse<?> refreshToken(TokenRefreshRequest token) {
        String requestRefreshToken = token.getTokenRefresh();
        return Optional.of(tokenService
                        .findByToken(requestRefreshToken)).map(tokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String accessToken = jwtHelper.generateJwtTokenFromEmail(user.getEmail());
                    String refreshToken = tokenService.createRefreshToken(user).getToken();
                    return (new GeneralResponse<>().withData(new TokenRefreshResponseBody(accessToken, refreshToken)));
                }).orElse(new GeneralResponse<>().withError(ErrorDtoConst.TOKEN_01));
    }
}
