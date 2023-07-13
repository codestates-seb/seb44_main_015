package main.cardCheck.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.notice.entity.Notice;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class CardCheckDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{

        private Card card;

        private Notice notice;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{


        private Long cardCheckId;

        @NotBlank
        private int checked;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{

        @NotBlank
        private Long cardCheckId;

        @NotBlank
        private int checked;

        @NotBlank
        private String userName;

        @NotBlank
        private String userEmail;

        @NotBlank
        private String userPhone;

        @NotBlank
        private List<Tag> userTags;

    }
}
