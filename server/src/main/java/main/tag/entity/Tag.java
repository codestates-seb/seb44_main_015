package main.tag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import main.user.entity.User;
import main.notice.entity.Notice;
import main.company.entity.Company;

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

    @ManyToMany(mappedBy = "tag")
    private List<User> users = new ArrayList<>();

    @ManyToMany(mappedBy = "tag")
    private List<Company> companies = new ArrayList<>();

    @ManyToMany(mappedBy = "tag")
    private List<Notice> notices = new ArrayList<>();

}
