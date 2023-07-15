package main.notice.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.cardCheck.entity.CardCheck;
import main.company.entity.Company;
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
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Column
    private LocalDateTime deadline;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @OneToMany(mappedBy = "notice", cascade = CascadeType.PERSIST)
    private List<CardCheck> cardChecks = new ArrayList<>();

    @ManyToMany(mappedBy = "notice", cascade = CascadeType.ALL)
    private List<Tag> tags = new ArrayList<>();
}
