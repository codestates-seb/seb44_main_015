package main.notice.service;

import lombok.RequiredArgsConstructor;
import main.cardCheck.entity.CardCheck;
import main.cardCheck.service.CardCheckService;
import main.company.service.CompanyService;
import main.companyTag.service.CompanyTagService;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.dto.NoticePatchDto;
import main.notice.dto.NoticePostDto;
import main.notice.dto.NoticeResponseDetailDto;
import main.notice.dto.NoticeResponseDto;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.notice.repository.NoticeRepository;
import main.noticeTag.entity.NoticeTag;
import main.noticeTag.repository.NoticeTagRepository;
import main.noticeTag.service.NoticeTagService;
import main.tag.entity.Tag;
import main.user.entity.User;
import main.user.service.UserService;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Transactional
@Service
@RequiredArgsConstructor
public class NoticeService {
    private final NoticeRepository noticeRepository;
    private final CompanyService companyService;
    private final NoticeTagService noticeTagService;
    private final NoticeTagRepository noticeTagRepository;
    private final UserService userService;
    private final CardCheckService cardCheckService;
    private final NoticeMapper noticeMapper;

    public Notice createNotice(NoticePostDto noticePostDto){
        Notice notice = noticeMapper.noticePostDtoToNotice(noticePostDto);
        Long companyId = noticePostDto.getCompanyId();
        List<String> tagNames = noticePostDto.getTagNames();
        notice.setCompany(companyService.findCompany(companyId));
        Notice createNotice = noticeRepository.save(notice);
        Long noticeId = createNotice.getNoticeId();
        if(tagNames != null) {
            for (String tagName : tagNames) {
                createNotice.getNoticeTags().add(noticeTagService.createNoticeTag(noticeId, tagName));
            }
        }
        return noticeRepository.save(createNotice);
    }

    public Notice updateNotice(NoticePatchDto noticePatchDto){
        Notice notice = noticeMapper.noticePatchDtoToNotice(noticePatchDto);

        Notice findNotice = findVerifiedNotice(notice.getNoticeId());
        notice.setViewCount(findNotice.getViewCount());
        notice.setCompany(findNotice.getCompany());
        return noticeRepository.save(notice);
    }

    public Notice findNotice(Long noticeId){
        Notice findNotice = findVerifiedNotice(noticeId);
        return findNotice;
    }

    public NoticeResponseDetailDto findNoticeAddViewCount(Long noticeId){
        Notice findNotice = findVerifiedNotice(noticeId);
        findNotice.addViewCount();
        noticeRepository.save(findNotice);
        return noticeMapper.noticeToNoticeResponseDetailDto(findNotice);
    }

    public List<NoticeResponseDto> findNoticesByCompanyId(Long companyId){
        List<Notice> notices = noticeRepository.findAllByCompanyCompanyId(companyId);
        return noticeMapper.noticesToNoticeResponseDtos(notices);
    }

    public List<NoticeResponseDto> searchNotices(String name, int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        LocalDateTime now = LocalDateTime.now();
        return noticeMapper.noticesToNoticeResponseDtos(
                noticeRepository.findAllByDeadlineAfterAndTitleContainingOrDeadlineAfterAndContentContaining(now, name, now, name, limitPageable));
    }

    public List<NoticeResponseDto> findNoticesPage(String tagName, int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        List<NoticeTag> noticeTags = noticeTagRepository.findAllByTagNameOrderByNoticeCreatedAtDesc(tagName, limitPageable);
        List<Notice> notices = noticeTags.stream()
                .map(noticeTag -> noticeTag.getNotice())
                .collect(Collectors.toList());
        return noticeMapper.noticesToNoticeResponseDtos(notices);
    }

    public List<NoticeResponseDto> findNoticesPage(int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        return noticeMapper.noticesToNoticeResponseDtos(noticeRepository.findAllByOrderByCreatedAtDesc(limitPageable));
    }

    public List<NoticeResponseDto> findNoticesScroll(int scroll, int limit){
        Pageable limitPageable = PageRequest.of(scroll, limit);
        return noticeMapper.noticesToNoticeResponseDtos(noticeRepository.findAllByOrderByCreatedAtDesc(limitPageable));
    }

    public List<NoticeResponseDto> findNotices(){
        return noticeMapper.noticesToNoticeResponseDtos(noticeRepository.findAll());
    }

    public List<NoticeResponseDto> findUserNotices(Long userId){
        Long cardId = userService.findUser(userId).getCard().getCardId();
        List<CardCheck> cardChecks = cardCheckService.findCardChecksUser(cardId);
        List<Notice> notices = cardChecks.stream()
                .map(cardCheck -> cardCheck.getNotice())
                .collect(Collectors.toList());
        return noticeMapper.noticesToNoticeResponseDtos(notices);
    }

    public void deleteNotice(Long noticeId){
        Notice notice = findVerifiedNotice(noticeId);

        noticeRepository.delete(notice);
    }


    public Notice findVerifiedNotice(long noticeId) {
        Optional<Notice> optionalNotice =
                noticeRepository.findByNoticeId(noticeId);

        Notice findNotice =
                optionalNotice.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.NOTICE_NOT_FOUND));

        return findNotice;
    }
}
