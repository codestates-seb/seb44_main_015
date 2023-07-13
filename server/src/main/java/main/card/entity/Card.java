package main.card.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cardId;

    @Column
    private int viewCount;

    @OneToOne
    private User user;

}
