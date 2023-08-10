package main.card.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.cardCheck.entity.CardCheck;
import main.user.entity.User;

import javax.persistence.*;
import java.util.List;

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
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "card", cascade = CascadeType.ALL)
    private List<CardCheck> cardChecks;

    public void addViewCount(){
        this.setViewCount(this.getViewCount()+1);
    }
}
