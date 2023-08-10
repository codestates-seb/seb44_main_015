package main.companyTag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.company.entity.Company;
import main.tag.entity.Tag;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class CompanyTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COMPANY_ID")
    private Company company;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
}
