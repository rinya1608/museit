package ru.web.museit.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.web.museit.error.ErrorDto;

/**
 * @author Yarullin Renat
 */
@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GeneralResponse<T> {
    private T data;
    private ErrorDto error;
    public String message;

    public GeneralResponse<T> withError(String message) {
        this.message = message;
        return this;
    }

    public GeneralResponse<T> withError(ErrorDto error) {
        this.error = error;
        return this;
    }

    public GeneralResponse<T> withData(T data) {
        this.data = data;
        return this;
    }

    public boolean success() {
        return data != null;
    }
}
