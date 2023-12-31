package main.company.repository;

import main.company.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    Optional<Company> findByEmail(String email);
    Optional<Company> findByCompanyId(Long companyId);
    Optional<Company> findByRefreshToken(String refreshToken);
}
