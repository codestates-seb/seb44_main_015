package main.notice.mapper;

import main.bookmark.entity.Bookmark;
import main.notice.dto.*;
import main.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface NoticeMapper {

    Notice noticePostDtoToNotice(NoticePostDto noticePostDto);

    Notice noticePatchDtoToNotice(NoticePatchDto noticePatchDto);

    @Mapping(source = "company.name", target = "companyName")
    @Mapping(source = "company.intro", target = "companyIntro")
    @Mapping(source = "company.phone", target = "companyPhone")
    @Mapping(source = "company.email", target = "companyEmail")
    @Mapping(source = "company.person", target = "companyPerson")
    @Mapping(source = "company.address", target = "companyAddress")
    @Mapping(target = "tagNames", expression = "java(getTagNames(notice))")
    NoticeResponseDetailDto noticeToNoticeResponseDetailDto(Notice notice);

    @Mapping(source = "notice.noticeId", target = "noticeId")
    @Mapping(source = "notice.title", target = "title")
    @Mapping(source = "notice.content", target = "content")
    @Mapping(source = "notice.viewCount", target = "viewCount")
    @Mapping(source = "notice.createdAt", target = "createdAt")
    @Mapping(source = "notice.deadline", target = "deadline")
    @Mapping(source = "notice.company.name", target = "companyName")
    @Mapping(target = "tagNames", expression = "java(getTagNames(bookmark))")
    NoticeResponseDto bookmarkToNoticeResponseDto(Bookmark bookmark);

    @Mapping(source = "company.name", target = "companyName")
    @Mapping(source = "company.intro", target = "companyIntro")
    @Mapping(source = "company.phone", target = "companyPhone")
    @Mapping(source = "company.email", target = "companyEmail")
    @Mapping(source = "company.person", target = "companyPerson")
    @Mapping(source = "company.address", target = "companyAddress")
    @Mapping(target = "tagNames", expression = "java(getTagNames(notice))")
    NoticeResponseDto noticeToNoticeResponseDto(Notice notice);

    List<NoticeResponseDto> noticesToNoticeResponseDtos(List<Notice> notices);

    List<NoticeResponseDto> bookmarksToNoticeResponseDtos(List<Bookmark> bookmarks);

    default List<String> getTagNames(Notice notice){
        return notice.getNoticeTags().stream()
                .map(noticeTag -> noticeTag.getTag().getName())
                .collect(Collectors.toList());
    }

    default List<String> getTagNames(Bookmark bookmark){
        return bookmark.getNotice().getNoticeTags().stream()
                .map(noticeTag -> noticeTag.getTag().getName())
                .collect(Collectors.toList());
    }
}
