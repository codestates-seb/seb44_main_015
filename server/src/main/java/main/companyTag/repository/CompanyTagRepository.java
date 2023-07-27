package main.companyTag.repository;

import main.companyTag.entity.CompanyTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CompanyTagRepository extends JpaRepository<CompanyTag, Long> {
    Optional<CompanyTag> findByCompanyCompanyIdAndTagTagId(Long companyId, Long tagId);
    Optional<CompanyTag> findByCompanyCompanyIdAndTagName(Long companyId, String name);
    List<CompanyTag> findAllByCompanyCompanyId(Long companyId);
}
