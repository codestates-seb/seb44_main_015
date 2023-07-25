package main.companyTag.service;

import lombok.RequiredArgsConstructor;
import main.company.repository.CompanyRepository;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.company.entity.Company;
import main.company.service.CompanyService;
import main.companyTag.entity.CompanyTag;
import main.companyTag.repository.CompanyTagRepository;
import main.noticeTag.entity.NoticeTag;
import main.tag.entity.Tag;
import main.tag.service.TagService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class CompanyTagService {
    private final CompanyTagRepository companyTagRepository;
    private final CompanyRepository companyRepository;
    private final TagService tagService;

    public CompanyTag createCompanyTag(Long companyId, Long tagId){
        verifyExistCompanyTag(companyId, tagId);
        Company company = companyRepository.findById(companyId).orElseThrow();
        Tag tag = tagService.findTag(tagId);
        CompanyTag companyTag = new CompanyTag();
        companyTag.setTag(tag);
        companyTag.setCompany(company);

        return companyTagRepository.save(companyTag);

    }

    public CompanyTag signupCreateCompanyTag(Company company, Long tagId){
        Tag tag = tagService.findTag(tagId);
        CompanyTag companyTag = new CompanyTag();
        companyTag.setTag(tag);
        companyTag.setCompany(company);

        return companyTagRepository.save(companyTag);

    }

    public CompanyTag signupCreateCompanyTag(Company company, String tagName){
        Tag tag = tagService.findTagByName(tagName);
        CompanyTag companyTag = new CompanyTag();
        companyTag.setTag(tag);
        companyTag.setCompany(company);

        return companyTagRepository.save(companyTag);

    }
    public void deleteCompanyTag(Long companyId, Long tagId){
        CompanyTag companyTag = companyTagRepository.findByCompanyCompanyIdAndTagTagId(companyId, tagId).orElseThrow();
        companyTagRepository.delete(companyTag);
    }

    public List<CompanyTag> findCompanyTags(Long companyId){
        return companyTagRepository.findAllByCompanyCompanyId(companyId);
    }

    private void verifyExistCompanyTag(Long companyId, Long tagId){
        Optional<CompanyTag> optionalCompanyTag = companyTagRepository.findByCompanyCompanyIdAndTagTagId(companyId,tagId);

        if(optionalCompanyTag.isPresent()){
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
        }
    }
}

