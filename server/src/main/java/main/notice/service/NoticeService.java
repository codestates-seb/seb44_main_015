package main.notice.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import main.notice.repository.NoticeRepository;
import main.user.entity.User;
import org.aspectj.weaver.ast.Not;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NoticeService {
    private final NoticeRepository noticeRepository;

    public Notice createNotice(Notice notice){
        return noticeRepository.save(notice);
    }

    public Notice updateNotice(Notice notice){
        findVerifiedNotice(notice.getNoticeId());
        return noticeRepository.save(notice);
    }

    public Notice findNotice(Long noticeId){
        Notice findNotice = findVerifiedNotice(noticeId);
        return findNotice;
    }

    public List<Notice> findNotices(){
        return noticeRepository.findAll();
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
