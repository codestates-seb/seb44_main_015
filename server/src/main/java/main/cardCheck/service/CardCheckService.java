package main.cardCheck.service;

import lombok.RequiredArgsConstructor;
import main.card.entity.Card;
import main.card.service.CardService;
import main.cardCheck.entity.CardCheck;
import main.cardCheck.repository.CardCheckRepository;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CardCheckService {
    CardCheckRepository cardCheckRepository;

    public CardCheck createCardCheck(CardCheck cardCheck){
        verifyExistCardCheck(cardCheck.getCard(), cardCheck.getNotice());
        return cardCheckRepository.save(cardCheck);
    }

    public List<CardCheck> findCardChecksUser(long userId){
        return cardCheckRepository.findAllByCardUserUserId(userId);
    }

    public List<CardCheck> findCardChecks(long noticeId){
        return cardCheckRepository.findByNoticeNoticeIdOrderByCreatedAtAsc(noticeId);
    }

    public CardCheck updateCardCheck(CardCheck cardCheck){
        return cardCheckRepository.save(cardCheck);
    }

    private void verifyExistCardCheck(Card card, Notice notice){
        if(cardCheckRepository.existsByCardAndNotice(card, notice)){
            throw new BusinessLogicException(ExceptionCode.CARD_CHECK_EXISTS);
        }
    }
}
