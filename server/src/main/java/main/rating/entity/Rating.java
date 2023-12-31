package main.rating.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.company.entity.Company;
import main.notice.entity.Notice;
import main.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ratingId;

    @Column
    private int score;

    @ManyToOne
    @JoinColumn(name = "NOTICE_ID")
    private Notice notice;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
