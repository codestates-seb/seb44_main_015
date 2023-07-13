package main.rating.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.notice.entity.Notice;
import main.user.entity.User;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class RatingDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{
        private User user;
        private Notice notice;
        @NotBlank
        private int score;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{

        @NotBlank
        private int score;

        @NotBlank
        private Long userId;

        @NotBlank
        private Long noticeId;

        @NotBlank
        private Long companyId;

    }
}
