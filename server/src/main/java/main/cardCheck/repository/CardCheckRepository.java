package main.cardCheck.repository;

import main.card.entity.Card;
import main.cardCheck.entity.CardCheck;
import main.notice.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CardCheckRepository extends JpaRepository<CardCheck, Long> {
    List<CardCheck> findByNoticeNoticeIdOrderByCreatedAtAsc(Long noticeId);
    List<CardCheck> findByCheckedAndCardUserUserId(CardCheck.CardCheckStatus checked, Long userId);
    List<CardCheck> findAllByCardUserUserId(Long userId);
    List<CardCheck> findAllByCardCardId(Long cardId);
    List<CardCheck> findAllByCheckedAndNoticeNoticeId(CardCheck.CardCheckStatus checked, Long noticeId);
    Optional<CardCheck> findByCardCheckId(Long cardCheckId);
    boolean existsByCardAndNotice(Card card, Notice notice);
}
