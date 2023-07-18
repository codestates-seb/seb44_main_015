package main.card.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class CardDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{

        @NotBlank
        private Long cardId;

        @NotBlank
        private String name;

        @NotBlank
        private String email;

        @NotBlank
        private String phone;

        @NotBlank
        private List<String> tagNames;

    }
}
