package main.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.notice.entity.Notice;
import main.resume.entity.Resume;
import main.tag.entity.Tag;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
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
        @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$")
        private String phone;

        @NotBlank
        private String name;

        private List<String> tagNames;

        private List<String> resumeContent;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{

        private long userId;

        private String password;

        @NotBlank
        @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$")
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

        private int viewCount;

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

        private long cardId;

        private int viewCount;

        private List<String> tagNames;

        private List<String> resumeContents;
    }

}
