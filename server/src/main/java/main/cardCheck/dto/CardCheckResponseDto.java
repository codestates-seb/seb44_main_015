package main.cardCheck.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.cardCheck.entity.CardCheck;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CardCheckResponseDto{

    @NotBlank
    private Long cardCheckId;

    private Long userId;

    @NotBlank
    private CardCheck.CardCheckStatus checked;

    @NotBlank
    private String userName;

    @NotBlank
    private String userEmail;

    @NotBlank
    private String userPhone;

    @NotBlank
    private List<String> tagNames;

}
