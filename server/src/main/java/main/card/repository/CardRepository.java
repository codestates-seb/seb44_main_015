package main.card.repository;

import main.card.entity.Card;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CardRepository extends JpaRepository<Card,Long> {
    Optional<Card> findByCardId(Long cardId);
    List<Card> findAllByOrderByViewCountDesc(Pageable pageable);
}
