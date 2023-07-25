package main.noticeTag.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.repository.NoticeRepository;
import main.tag.entity.Tag;
import main.tag.service.TagService;
import main.notice.entity.Notice;
import main.notice.service.NoticeService;
import main.noticeTag.entity.NoticeTag;
import main.noticeTag.repository.NoticeTagRepository;
import main.userTag.entity.UserTag;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class NoticeTagService {
    private final NoticeTagRepository noticeTagRepository;
    private final NoticeRepository noticeRepository;
    private final TagService tagService;

    public NoticeTag createNoticeTag(Long noticeId, Long tagId){
        verifyExistNoticeTag(noticeId, tagId);
        Notice notice = noticeRepository.findByNoticeId(noticeId).orElseThrow();
        Tag tag = tagService.findTag(tagId);
        NoticeTag noticeTag = new NoticeTag();
        noticeTag.setTag(tag);
        noticeTag.setNotice(notice);

        return noticeTagRepository.save(noticeTag);

    }

    public NoticeTag createNoticeTag(Long noticeId, String tagName){
        verifyExistNoticeTag(noticeId, tagName);
        Notice notice = noticeRepository.findByNoticeId(noticeId).orElseThrow();
        Tag tag = tagService.findTagByName(tagName);
        NoticeTag noticeTag = new NoticeTag();
        noticeTag.setTag(tag);
        noticeTag.setNotice(notice);

        return noticeTagRepository.save(noticeTag);

    }
    public void deleteNoticeTag(Long noticeId, Long tagId){
        NoticeTag noticeTag = noticeTagRepository.findByNoticeNoticeIdAndTagTagId(noticeId, tagId).orElseThrow();
        noticeTagRepository.delete(noticeTag);
    }

    private void verifyExistNoticeTag(Long noticeId, Long tagId){
        Optional<NoticeTag> optionalNoticeTag = noticeTagRepository.findByNoticeNoticeIdAndTagTagId(noticeId,tagId);

        if(optionalNoticeTag.isPresent()){
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
        }
    }
    private void verifyExistNoticeTag(Long noticeId, String name){
        Optional<NoticeTag> optionalNoticeTag = noticeTagRepository.findByNoticeNoticeIdAndTagName(noticeId,name);

        if(optionalNoticeTag.isPresent()){
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
        }
    }
}

