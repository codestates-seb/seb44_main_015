package main.company.service;

import lombok.RequiredArgsConstructor;
import main.card.entity.Card;
import main.company.dto.CompanyDto;
import main.company.entity.Company;
import main.company.repository.CompanyRepository;
import main.company.entity.Company;
import main.companyTag.entity.CompanyTag;
import main.companyTag.service.CompanyTagService;
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
    private final CompanyTagService companyTagService;


    public Company createCompany(List<Long> tagIds, Company company){

        verifyExistEmail(company.getEmail());

        String encryptedPassword = passwordEncoder.encode(company.getPassword());
        company.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(company.getEmail(),company);
        company.setRoles(roles);

        Company savedCompany = companyRepository.save(company);

        Long companyId = savedCompany.getCompanyId();
        if(tagIds != null) {
            for (Long tagId : tagIds) {
                savedCompany.getCompanyTags().add(companyTagService.createCompanyTag(companyId, tagId));
            }
        }

        return savedCompany;
    }

    public Company findCompany(Long companyId){
        return findVerifiedCompany(companyId);
    }

    public Company findCompanyByEmail(String email){
        return findVerifiedCompanyByEmail(email);
    }

    public Optional<Company> getCompanyById(Long companyId) {
        return companyRepository.findById(companyId);
    }

    public Company updateCompanyProfile(Company company) {
        Company findCompany = findVerifiedCompany(company.getCompanyId());

        Optional.ofNullable(company.getPassword())
                .ifPresent(password -> findCompany.setPassword(passwordEncoder.encode(password)));
        Optional.ofNullable(company.getRefreshToken())
                .ifPresent(refreshToken -> findCompany.setRefreshToken(refreshToken));

        return companyRepository.save(findCompany);

    }

    private Company findVerifiedCompany(Long companyId){
        Optional<Company> optionalCompany = companyRepository.findByCompanyId(companyId);

        return optionalCompany.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMPANY_NOT_FOUND));



    }

    private Company findVerifiedCompanyByEmail(String email){
        Optional<Company> optionalCompany = companyRepository.findByEmail(email);

        return optionalCompany.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMPANY_NOT_FOUND));
    }
    public Company findVerifiedCompanyByRefreshToken(String refreshToken){
        Optional<Company> optionalCompany = companyRepository.findByRefreshToken(refreshToken);

        return optionalCompany.orElseThrow(()-> new BusinessLogicException(ExceptionCode.REFRESH_TOKEN_NOT_FOUND));
    }
    private void verifyExistEmail(String email){
        Optional<Company> optionalCompany = companyRepository.findByEmail(email);
        if(optionalCompany.isPresent()){
            throw new BusinessLogicException(ExceptionCode.COMPANY_EXISTS);
        }
    }

}
