package main.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User email not found"),
    USER_EXISTS(409, "User email exists");



    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }


}
