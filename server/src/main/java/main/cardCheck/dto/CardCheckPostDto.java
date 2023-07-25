package main.cardCheck.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.notice.entity.Notice;

@Getter
@Setter
@NoArgsConstructor
public class CardCheckPostDto {
    private Long cardId;

    private Long noticeId;
}
