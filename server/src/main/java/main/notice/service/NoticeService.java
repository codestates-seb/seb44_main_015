package main.notice.service;

import lombok.RequiredArgsConstructor;
import main.company.service.CompanyService;
import main.companyTag.service.CompanyTagService;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import main.notice.repository.NoticeRepository;
import main.noticeTag.entity.NoticeTag;
import main.noticeTag.repository.NoticeTagRepository;
import main.noticeTag.service.NoticeTagService;
import main.tag.entity.Tag;
import main.user.entity.User;
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

    public Notice createNotice(Long companyId, List<String> tagNames, Notice notice){
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

    public Notice updateNotice(Notice notice){
        Notice findNotice = findVerifiedNotice(notice.getNoticeId());
        notice.setViewCount(findNotice.getViewCount());
        notice.setCompany(findNotice.getCompany());
        return noticeRepository.save(notice);
    }

    public Notice findNotice(Long noticeId){
        Notice findNotice = findVerifiedNotice(noticeId);
        return findNotice;
    }

    public Notice findNoticeAddViewCount(Long noticeId){
        Notice findNotice = findVerifiedNotice(noticeId);
        findNotice.addViewCount();
        return noticeRepository.save(findNotice);
    }

    public List<Notice> findNoticesByCompanyId(Long companyId){
        List<Notice> notices = noticeRepository.findAllByCompanyCompanyId(companyId);
        return notices;
    }

    public List<Notice> searchNotices(String name, int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        LocalDateTime now = LocalDateTime.now();
        return noticeRepository.findAllByDeadlineAfterAndTitleContainingOrDeadlineAfterAndContentContaining(now, name, now, name, limitPageable);
    }

    public List<Notice> findNoticesPage(String tagName, int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        List<NoticeTag> noticeTags = noticeTagRepository.findAllByTagNameOrderByNoticeCreatedAtDesc(tagName, limitPageable);
        List<Notice> notices = noticeTags.stream()
                .map(noticeTag -> noticeTag.getNotice())
                .collect(Collectors.toList());
        return notices;
    }

    public List<Notice> findNoticesPage(int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        return noticeRepository.findAllByOrderByCreatedAtDesc(limitPageable);
    }

    public List<Notice> findNoticesScroll(int scroll, int limit){
        Pageable limitPageable = PageRequest.of(scroll, limit);
        return noticeRepository.findAllByOrderByCreatedAtDesc(limitPageable);
    }

    public List<Notice> findNotices(){
        return noticeRepository.findAll();
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
