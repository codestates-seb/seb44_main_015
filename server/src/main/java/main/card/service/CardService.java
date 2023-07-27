package main.card.service;

import lombok.RequiredArgsConstructor;
import main.card.dto.CardResponseDto;
import main.card.entity.Card;
import main.card.mapper.CardMapper;
import main.card.repository.CardRepository;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.user.entity.User;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class CardService {

    private final CardRepository cardRepository;
    private final CardMapper cardMapper;

    public Card createCard(User user){
        Card card = new Card();
        card.setUser(user);
        return cardRepository.save(card);
    }

    public Card findCard(Long cardId){
        return findVerifiedCard(cardId);
    }

    public List<CardResponseDto> findMostViewedCards(int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        List<Card> cards = cardRepository.findAllByOrderByViewCountDesc(limitPageable);
        return cardMapper.cardsToCardResponsesDto(cards);
    }



    public Card findVerifiedCard(long cardId) {
        Optional<Card> optionalCard =
                cardRepository.findByCardId(cardId);

        Card findCard =
                optionalCard.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.CARD_NOT_FOUND));

        return findCard;
    }
}
