package main.notice.mapper;

import main.bookmark.entity.Bookmark;
import main.notice.dto.NoticeDto;
import main.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface NoticeMapper {

    Notice noticePostDtoToNotice(NoticeDto.Post noticePostDto);

    Notice noticePatchDtoToNotice(NoticeDto.Patch noticePatchDto);

    @Mapping(source = "company.name", target = "companyName")
    @Mapping(source = "company.intro", target = "companyIntro")
    @Mapping(source = "company.phone", target = "companyPhone")
    @Mapping(source = "company.email", target = "companyEmail")
    @Mapping(source = "company.person", target = "companyPerson")
    @Mapping(source = "company.address", target = "companyAddress")
    NoticeDto.ResponseDetail noticeToNoticeResponseDetailDto(Notice notice);

    @Mapping(source = "notice.noticeId", target = "noticeId")
    @Mapping(source = "notice.title", target = "title")
    @Mapping(source = "notice.content", target = "content")
    @Mapping(source = "notice.viewCount", target = "viewCount")
    @Mapping(source = "notice.createdAt", target = "createdAt")
    @Mapping(source = "notice.deadline", target = "deadline")
    @Mapping(source = "notice.company.name", target = "companyName")
    NoticeDto.Response bookmarkToNoticeResponseDto(Bookmark bookmark);

    @Mapping(source = "company.name", target = "companyName")
    NoticeDto.Response noticeToNoticeResponseDto(Notice notice);

    List<NoticeDto.Response> noticesToNoticeResponseDtos(List<Notice> notices);

    List<NoticeDto.Response> bookmarksToNoticeResponseDtos(List<Bookmark> bookmarks);
}
