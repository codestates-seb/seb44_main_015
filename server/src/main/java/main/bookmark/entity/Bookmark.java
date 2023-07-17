package main.bookmark.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.notice.entity.Notice;
import main.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookmarkId;

    @ManyToOne
    @JoinColumn(name = "NOTICE_ID")
    private Notice notice;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
