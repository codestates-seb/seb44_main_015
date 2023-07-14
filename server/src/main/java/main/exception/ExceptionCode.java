package main.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User email not found"),
    NOTICE_NOT_FOUND(404, "Notice not found"),
    CARD_NOT_FOUND(404,"Card not found"),
    USER_EXISTS(409, "User email exists"),
    RATING_EXISTS(409, "Rating exists"),
    CARD_CHECK_EXISTS(409, "Card check exists");



    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }


}
