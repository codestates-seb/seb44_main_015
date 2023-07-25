package main.company.mapper;


import main.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import main.company.dto.CompanyDto;
import main.company.entity.Company;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CompanyMapper {

    Company companyPostDtoToCompany(CompanyDto.Post company);
    Company companyPatchDtoToCompany(CompanyDto.Patch company);

    @Mapping(target = "tagNames", expression = "java(getTagNames(company))")
    CompanyDto.Response companyToCompanyResponseDto(Company company);

    default List<String> getTagNames(Company company){
        return company.getCompanyTags().stream()
                .map(companyTag -> companyTag.getTag().getName())
                .collect(Collectors.toList());
    }

}
