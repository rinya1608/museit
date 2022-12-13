package ru.web.museit.error;

public class ErrorDtoConst {
    public static final ErrorDto REG_01 = new ErrorDto("REG_01", "Пользователь с такм email уже существует");
    public static final ErrorDto REG_02 = new ErrorDto("REG_02", "Пароли должны совпадать");
    public static final ErrorDto AUTH_01 = new ErrorDto("AUTH_01", "Пользователя с таким email не существует");
    public static final ErrorDto AUTH_02 = new ErrorDto("AUTH_02", "Не верный пароль");
    public static final ErrorDto TOKEN_01 = new ErrorDto("TOKEN_01", "Рефреш токен не найден");
    public static final ErrorDto TOKEN_02 = new ErrorDto("TOKEN_02", "Срок действия токена истек");
}
