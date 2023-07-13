package main.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.notice.entity.Notice;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

public class UserDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{
        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String password;

        @NotBlank
        private String phone;

        @NotBlank
        private String name;
/**
       나중에 작성
        private List<Tag> tags;

        private List<Resume> resumes;
*/

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{

        private long userId;
        @NotBlank
        private String password;

        @NotBlank
        private String phone;

        @NotBlank
        private String name;
/**
 나중에 작성
 private List<Tag> tags;

 private List<Resume> resumes;
 */

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long userId;

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String phone;

        @NotBlank
        private String name;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class ProfileResponse{
        private long userId;

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String phone;

        @NotBlank
        private String name;

        private List<Tag> tags;

        private Card card;

        private List<Notice> notices;
    }

}
