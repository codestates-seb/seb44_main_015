package main.cardCheck.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.company.entity.Company;
import main.notice.entity.Notice;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class CardCheck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cardCheckId;

    @Column
    private int checked;

    @CreatedDate
    @Column(updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;

    @ManyToOne
    @JoinColumn(name = "notice_id")
    private Notice notice;
}
