package main.userTag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.tag.entity.Tag;
import main.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class UserTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userTagId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
}
