package main.company.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import main.company.dto.CompanyDto;
import main.company.entity.Company;

@Mapper
public interface CompanyMapper {
/**
 CompanyMapper INSTANCE = Mappers.getMapper(CompanyMapper.class);

 @Mapping(target = "companyId", ignore = true)
 Company toEntity(CompanyDto companyDto);

 CompanyDto toDto(Company company);

 임시코드, 수정예정, 필요하지않는건가? Mapper의 이해도가 떨어지네.. 이런, **/
}
