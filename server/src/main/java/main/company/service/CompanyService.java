package main.company.service;

import lombok.RequiredArgsConstructor;
import main.company.dto.CompanyDto;
import main.company.entity.Company;
import main.company.repository.CompanyRepository;
import main.company.entity.Company;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.security.utils.CustomAuthorityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public Company createCompany(Company company){

        verifyExistEmail(company.getEmail());

        String encryptedPassword = passwordEncoder.encode(company.getPassword());
        company.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(company.getEmail(),company);
        company.setRoles(roles);

        Company savedCompany = companyRepository.save(company);

        return savedCompany;
    }

    public Company findCompany(Long companyId){
        return findVerifiedCompany(companyId);
    }

    public Optional<Company> getCompanyById(Long companyId) {
        return companyRepository.findById(companyId);
    }

    public Company updateCompanyProfile(Company company) {

        return companyRepository.save(company);

    }

    private Company findVerifiedCompany(Long companyId){
        Optional<Company> optionalCompany = companyRepository.findById(companyId);

        return optionalCompany.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMPANY_NOT_FOUND));



    }
    private void verifyExistEmail(String email){

    }

}
