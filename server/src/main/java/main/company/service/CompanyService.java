package main.company.service;

import lombok.RequiredArgsConstructor;
import main.card.entity.Card;
import main.company.dto.CompanyDto;
import main.company.dto.CompanyPatchDto;
import main.company.dto.CompanyPostDto;
import main.company.dto.CompanyResponseDto;
import main.company.entity.Company;
import main.company.mapper.CompanyMapper;
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
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final CompanyTagService companyTagService;
    private final CompanyMapper companyMapper;

    public Company createCompany(CompanyPostDto companyPostDto){
        Company company = companyMapper.companyPostDtoToCompany(companyPostDto);
        List<String> tagNames = companyPostDto.getTagNames();
        verifyExistEmail(company.getEmail());

        String encryptedPassword = passwordEncoder.encode(company.getPassword());
        company.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(company.getEmail(),company);
        company.setRoles(roles);

        Company savedCompany = companyRepository.save(company);

        if(tagNames != null) {
            for (String tagName : tagNames) {
                savedCompany.getCompanyTags().add(companyTagService.signupCreateCompanyTag(savedCompany, tagName));
            }
        }

        return savedCompany;
    }

    public void logoutCompany(Long companyId){
        Company company = findCompany(companyId);
        company.setRefreshToken(null);
        companyRepository.save(company);
    }

    public Company findCompany(Long companyId){
        return findVerifiedCompany(companyId);
    }

    public CompanyResponseDto findCompanyById(Long companyId){
        return companyMapper.companyToCompanyResponseDto(findVerifiedCompany(companyId));
    }

    public Company findCompanyByEmail(String email){
        return findVerifiedCompanyByEmail(email);
    }

    public Optional<Company> getCompanyById(Long companyId) {
        return companyRepository.findById(companyId);
    }

    public Company updateCompanyProfile(CompanyPatchDto companyPatchDto) {
        Company company = companyMapper.companyPatchDtoToCompany(companyPatchDto);

        Company findCompany = findVerifiedCompany(company.getCompanyId());

        Optional.ofNullable(company.getPassword())
                .ifPresent(password -> findCompany.setPassword(passwordEncoder.encode(password)));
        Optional.ofNullable(company.getRefreshToken())
                .ifPresent(refreshToken -> findCompany.setRefreshToken(refreshToken));
        Optional.ofNullable(company.getName())
                .ifPresent(variable -> findCompany.setName(variable));
        Optional.ofNullable(company.getRoles())
                .ifPresent(variable -> findCompany.setRoles(variable));
        Optional.ofNullable(company.getEmail())
                .ifPresent(variable -> findCompany.setEmail(variable));
        Optional.ofNullable(company.getAddress())
                .ifPresent(variable -> findCompany.setAddress(variable));
        Optional.ofNullable(company.getIntro())
                .ifPresent(variable -> findCompany.setIntro(variable));
        Optional.ofNullable(company.getPerson())
                .ifPresent(variable -> findCompany.setPerson(variable));
        Optional.ofNullable(company.getPhone())
                .ifPresent(variable -> findCompany.setPhone(variable));

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
