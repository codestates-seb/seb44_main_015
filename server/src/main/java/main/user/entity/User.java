package main.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.notice.entity.Notice;
import main.rating.entity.Rating;
import main.resume.entity.Resume;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    @Column
    private String password;

    @Column
    private String phone;

    @Column(nullable = false, unique = false)
    private String name;

/*
    @Column(nullable = false)
    private String loginType;
*/



    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Column
    private String refreshtoken;

    @Column
    private double avgRating;
    @ManyToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Tag> tags = new ArrayList<>();

    @ManyToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Notice> bookmarks = new ArrayList<>();

    @OneToOne(mappedBy = "user", cascade = CascadeType.PERSIST)
    private Card card;

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Resume> resumes = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
    private List<Rating> ratings = new ArrayList<>();
}
