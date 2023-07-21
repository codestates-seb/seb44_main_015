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
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
@Service
@RequiredArgsConstructor
public class CardCheckService {
    private final CardCheckRepository cardCheckRepository;

    public CardCheck createCardCheck(CardCheck cardCheck){
        verifyExistCardCheck(cardCheck.getCard(), cardCheck.getNotice());
        return cardCheckRepository.save(cardCheck);
    }

    public List<CardCheck> findCardChecksUser(Long cardId){
        List<CardCheck> cardChecks = cardCheckRepository.findAllByCardCardId(cardId);
        if(cardChecks == null){
            throw new BusinessLogicException(ExceptionCode.NOTICE_NOT_FOUND);
        }

        return cardChecks;
    }

    public List<CardCheck> findCheckedCardChecks(String checked, Long noticeId){
        List<CardCheck> cardChecks = cardCheckRepository.findAllByCheckedAndNoticeNoticeId(CardCheck.CardCheckStatus.valueOf(checked.toUpperCase()), noticeId);

        return cardChecks;
    }

    public List<CardCheck> findCardChecks(Long noticeId){
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
