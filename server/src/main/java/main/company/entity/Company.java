package main.company.entity;

import main.rating.entity.Rating;
import main.notice.entity.Notice;
import main.tag.entity.Tag;

import javax.persistence.*;
import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyId;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String person;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column
    private String password;

    @Column
    private String address;

    @Column
    private String intro;

    @OneToMany(mappedBy = "company")
    private List<Notice> notices = new ArrayList<>();

    @OneToMany(mappedBy = "company")
    private List<Rating> ratings = new ArrayList<>();

    @ManyToMany(mappedBy = "company")
    private List<Tag> tags = new ArrayList<>();



}
