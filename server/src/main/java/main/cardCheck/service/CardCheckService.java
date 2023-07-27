package main.cardCheck.service;

import lombok.RequiredArgsConstructor;
import main.card.entity.Card;
import main.card.repository.CardRepository;
import main.card.service.CardService;
import main.cardCheck.dto.CardCheckPatchDto;
import main.cardCheck.dto.CardCheckPostDto;
import main.cardCheck.dto.CardCheckResponseDto;
import main.cardCheck.entity.CardCheck;
import main.cardCheck.mapper.CardCheckMapper;
import main.cardCheck.repository.CardCheckRepository;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import main.notice.repository.NoticeRepository;
import main.notice.service.NoticeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
@Service
@RequiredArgsConstructor
public class CardCheckService {
    private final CardCheckRepository cardCheckRepository;
    private final NoticeRepository noticeRepository;
    private final CardRepository cardRepository;
    private final CardCheckMapper cardCheckMapper;

    public CardCheck createCardCheck(CardCheckPostDto cardCheckPostDto){
        CardCheck cardCheck = new CardCheck();
        cardCheck.setCard(cardRepository.findByCardId(cardCheckPostDto.getCardId()).orElseThrow(
                ()-> new BusinessLogicException(ExceptionCode.CARD_NOT_FOUND)));
        cardCheck.setNotice(noticeRepository.findByNoticeId(cardCheckPostDto.getNoticeId()).orElseThrow(()->
                new BusinessLogicException(ExceptionCode.NOTICE_NOT_FOUND)));

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

    public CardCheck findCardCheck(Long cardCheckId){
        return cardCheckRepository.findByCardCheckId(cardCheckId).orElseThrow();
    }

    public List<CardCheckResponseDto> findCheckedCardChecks(String checked, Long noticeId){
        List<CardCheckResponseDto> cardChecks = cardCheckMapper.cardChecksToCardCheckResponseDtos(
                cardCheckRepository.findAllByCheckedAndNoticeNoticeId(CardCheck.CardCheckStatus.valueOf(checked.toUpperCase()), noticeId));

        return cardChecks;
    }

    public List<CardCheckResponseDto> findCardChecks(Long noticeId){
        return cardCheckMapper.cardChecksToCardCheckResponseDtos(cardCheckRepository.findByNoticeNoticeIdOrderByCreatedAtAsc(noticeId));
    }

    public CardCheck updateCardCheck(CardCheckPatchDto cardCheckPatchDto){

        CardCheck findcardCheck = findCardCheck(cardCheckPatchDto.getCardCheckId());
        findcardCheck.setChecked(cardCheckPatchDto.getChecked());
        return cardCheckRepository.save(findcardCheck);
    }

    private void verifyExistCardCheck(Card card, Notice notice){
        if(cardCheckRepository.existsByCardAndNotice(card, notice)){
            throw new BusinessLogicException(ExceptionCode.CARD_CHECK_EXISTS);
        }
    }
}
