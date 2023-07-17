package main.noticeTag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.tag.entity.Tag;
import main.notice.entity.Notice;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class NoticeTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noticeTagId;

    @ManyToOne
    @JoinColumn(name = "NOTICE_ID")
    private Notice notice;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
}
