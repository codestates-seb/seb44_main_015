package main.notice.service;

import lombok.RequiredArgsConstructor;
import main.company.service.CompanyService;
import main.companyTag.service.CompanyTagService;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import main.notice.repository.NoticeRepository;
import main.noticeTag.service.NoticeTagService;
import main.tag.entity.Tag;
import main.user.entity.User;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NoticeService {
    private final NoticeRepository noticeRepository;
    private final CompanyService companyService;
    private final NoticeTagService noticeTagService;

    public Notice createNotice(Long companyId, List<Long> tagIds, Notice notice){
        notice.setCompany(companyService.findCompany(companyId));
        Notice createNotice = noticeRepository.save(notice);
        Long noticeId = createNotice.getNoticeId();
        for(Long tagId : tagIds){
            createNotice.getNoticeTags().add(noticeTagService.createNoticeTag(noticeId, tagId));
        }
        return noticeRepository.save(createNotice);
    }

    public Notice updateNotice(Notice notice){
        findVerifiedNotice(notice.getNoticeId());
        return noticeRepository.save(notice);
    }

    public Notice findNotice(Long noticeId){
        Notice findNotice = findVerifiedNotice(noticeId);
        return findNotice;
    }

    public Notice findNoticeAddViewCount(Long noticeId){
        Notice findNotice = findVerifiedNotice(noticeId);
        findNotice.addViewCount();
        return findNotice;
    }

    public List<Notice> findNoticesByCompanyId(Long companyId){
        List<Notice> notices = noticeRepository.findAllByCompanyCompanyId(companyId);
        return notices;
    }

    public List<Notice> findNoticesPage(int page, int limit){
        Pageable limitPageable = PageRequest.of(page, limit);
        return noticeRepository.findAll(limitPageable).getContent();
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
