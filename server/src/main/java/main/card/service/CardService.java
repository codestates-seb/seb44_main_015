package main.card.service;

import lombok.RequiredArgsConstructor;
import main.card.entity.Card;
import main.card.repository.CardRepository;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.user.entity.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CardService {

    private final CardRepository cardRepository;

    public Card createCard(User user){
        Card card = new Card();
        card.setUser(user);
        return cardRepository.save(card);
    }

    public Card findCard(Long cardId){
        return findVerifiedCard(cardId);
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
