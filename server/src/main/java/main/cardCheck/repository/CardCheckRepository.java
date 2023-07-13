package main.cardCheck.repository;

import main.card.entity.Card;
import main.cardCheck.entity.CardCheck;
import main.notice.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardCheckRepository extends JpaRepository<CardCheck, Long> {
    List<CardCheck> findByNoticeNoticeIdOrderByCreatedAtAsc(Long noticeId);
    boolean existsByCardAndNotice(Card card, Notice notice);
}
