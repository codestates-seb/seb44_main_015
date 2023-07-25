package main.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.bookmark.entity.Bookmark;
import main.card.entity.Card;
import main.notice.entity.Notice;
import main.rating.entity.Rating;
import main.resume.entity.Resume;
import main.tag.entity.Tag;
import main.userTag.entity.UserTag;

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

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
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
    private String refreshToken;

    @Column
    private double avgRating;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserTag> userTags = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Bookmark> bookmarks = new ArrayList<>();


    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Card card;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Resume> resumes = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Rating> ratings = new ArrayList<>();

    public void setResume(Resume resume){
        resumes.add(resume);
        if(resume.getUser() != this){
            resume.setUser(this);
        }
    }

    public void setAvgRating(){
        double i = 0;
        for(Rating rating : this.getRatings()){
            i += rating.getScore();
        }
        this.setAvgRating(i/this.getRatings().size());
    }
}
