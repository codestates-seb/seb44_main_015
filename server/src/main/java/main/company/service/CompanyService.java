package main.company.service;

import main.company.dto.CompanyDto;
import main.company.entity.Company;
import main.company.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    @Autowired
    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public Optional<Company> getCompanyById(Long companyId) {
        return companyRepository.findById(companyId);
    }

    public Company updateCompanyProfile(Long companyId, String email, String phone, String intro) {
        Optional<Company> companyOptional = companyRepository.findById(companyId);
        if (companyOptional.isPresent()) {
            Company company = companyOptional.get();
            company.setEmail(email);
            company.setPhone(phone);
            company.setIntro(intro);
            return companyRepository.save(company);
        } else {
            throw new RuntimeException("not found.");
        }
    }

}
