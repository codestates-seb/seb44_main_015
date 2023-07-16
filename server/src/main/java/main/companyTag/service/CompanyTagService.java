package main.companyTag.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.company.entity.Company;
import main.company.service.CompanyService;
import main.companyTag.entity.CompanyTag;
import main.companyTag.repository.CompanyTagRepository;
import main.tag.entity.Tag;
import main.tag.service.TagService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CompanyTagService {
    private final CompanyTagRepository companyTagRepository;
    private final CompanyService companyService;
    private final TagService tagService;

    public CompanyTag createCompanyTag(Long companyId, Long tagId){
        Company company = companyService.findCompany(companyId);
        Tag tag = tagService.findTag(tagId);
        CompanyTag companyTag = new CompanyTag();
        companyTag.setTag(tag);
        companyTag.setCompany(company);

        return companyTagRepository.save(companyTag);

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

