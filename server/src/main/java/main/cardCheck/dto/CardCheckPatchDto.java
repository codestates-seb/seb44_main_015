package main.cardCheck.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.cardCheck.entity.CardCheck;

@Getter
@Setter
@NoArgsConstructor
public class CardCheckPatchDto {
    private Long cardCheckId;

    private CardCheck.CardCheckStatus checked;
}
