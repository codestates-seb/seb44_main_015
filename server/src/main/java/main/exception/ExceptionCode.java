package main.exception;

import lombok.Getter;

public enum ExceptionCode {
    REFRESH_TOKEN_NOT_FOUND(401, "REFRESH_TOKEN_NOT_FOUND"),
    USER_NOT_FOUND(404, "User email not found"),
    COMPANY_NOT_FOUND(404,"Company not found"),
    TAG_NOT_FOUND(404,"Tag not found"),
    NOTICE_NOT_FOUND(404, "Notice not found"),
    CARD_NOT_FOUND(404,"Card not found"),
    USER_EXISTS(409, "User exists"),
    COMPANY_EXISTS(409, "Company exists"),
    BOOKMARK_EXISTS(409, "Bookmark exists"),
    TAG_EXISTS(409, "Tag exists"),
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
