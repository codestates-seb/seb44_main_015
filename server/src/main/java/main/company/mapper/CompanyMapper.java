package main.company.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import main.company.dto.CompanyDto;
import main.company.entity.Company;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CompanyMapper {

    Company companyPostDtoToCompany(CompanyDto.Post company);
    Company companyPatchDtoToCompany(CompanyDto.Patch company);

}
