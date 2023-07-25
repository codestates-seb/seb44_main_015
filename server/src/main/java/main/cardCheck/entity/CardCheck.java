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
    private CardCheckStatus checked = CardCheckStatus.APPLY;

    @CreatedDate
    @Column(updatable = false, nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "CARD_ID")
    private Card card;

    @ManyToOne
    @JoinColumn(name = "NOTICE_ID")
    private Notice notice;

    public enum CardCheckStatus{

        APPLY("신청중"),
        ACCEPTED("합격"),
        REJECTED("불합격");

        @Getter
        private String status;

        CardCheckStatus(String status) {
            this.status = status;
        }
    }
}
