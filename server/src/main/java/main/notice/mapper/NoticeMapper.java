package main.notice.mapper;

import main.notice.dto.NoticeDto;
import main.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface NoticeMapper {

//    Notice noticePatchDtoToNotice(NoticeDto.Patch noticePatchDto);

    @Mapping(source = "company.name", target = "companyName")
    @Mapping(source = "company.intro", target = "companyIntro")
    @Mapping(source = "company.phone", target = "companyPhone")
    @Mapping(source = "company.email", target = "companyEmail")
    @Mapping(source = "company.person", target = "companyPerson")
    @Mapping(source = "company.address", target = "companyAddress")
    NoticeDto.ResponseDetail noticeToNoticeResponseDetailDto(Notice notice);

//    @Mapping(source = "company.name", target = "companyName")
//    NoticeDto.Response noticeToNoticeResponseDto(Notice notice);

    List<NoticeDto.Response> noticesToNoticeResponseDtos(List<Notice> notices);
}
