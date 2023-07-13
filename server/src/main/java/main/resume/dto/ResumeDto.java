package main.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.user.entity.User;

import javax.validation.constraints.NotBlank;

public class ResumeDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{

        private User user;
        @NotBlank
        private String content;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{

        private Long resumeId;
        private User user;
        @NotBlank
        private String content;

    }
}
