package main.notice.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.bookmark.entity.Bookmark;
import main.cardCheck.entity.CardCheck;
import main.company.entity.Company;
import main.noticeTag.entity.NoticeTag;
import main.tag.entity.Tag;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noticeId;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private int viewCount;

    @CreatedDate
    @Column(updatable = false, nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @LastModifiedDate
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Column
    private LocalDateTime deadline;

    @ManyToOne
    @JoinColumn(name = "COMPANY_ID")
    private Company company;

    @OneToMany(mappedBy = "notice", cascade = CascadeType.ALL)
    private List<CardCheck> cardChecks = new ArrayList<>();

    @OneToMany(mappedBy = "notice", cascade = CascadeType.ALL)
    private List<NoticeTag> noticeTags = new ArrayList<>();

    @OneToMany(mappedBy = "notice", cascade = CascadeType.ALL)
    private List<Bookmark> bookmarks = new ArrayList<>();

    public void addViewCount(){
        this.setViewCount(this.getViewCount()+1);
    }

}
