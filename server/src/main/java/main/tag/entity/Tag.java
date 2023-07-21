package main.tag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import main.cardCheck.entity.CardCheck;
import main.companyTag.entity.CompanyTag;
import main.noticeTag.entity.NoticeTag;
import main.user.entity.User;
import main.notice.entity.Notice;
import main.company.entity.Company;
import main.userTag.entity.UserTag;

import javax.persistence.*;
import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false)
    private String name;

    @Column
    private TagCategories category;

    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL)
    private List<UserTag> userTags = new ArrayList<>();

    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL)
    private List<CompanyTag> companyTags = new ArrayList<>();

    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL)
    private List<NoticeTag> noticeTags = new ArrayList<>();

    public enum TagCategories{

        DESIGNER("디자이너"),
        DEVELOPER("개발자"),
        TRANSLATOR("번역가"),
        COMPANY_INTRO("회사 소개"),
        SELF_INTRO("자기 소개"),
        LOCATION("지역");

        @Getter
        private String categories;

        TagCategories(String categories) {
            this.categories = categories;
        }
    }

}
