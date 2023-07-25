package main.noticeTag.repository;

import main.notice.entity.Notice;
import main.noticeTag.entity.NoticeTag;
import main.noticeTag.entity.NoticeTag;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoticeTagRepository extends JpaRepository<NoticeTag, Long> {
    Optional<NoticeTag> findByNoticeNoticeIdAndTagTagId(Long noticeId, Long tagId);
    Optional<NoticeTag> findByNoticeNoticeIdAndTagName(Long noticeId, String name);
    List<NoticeTag> findAllByTagNameOrderByNoticeCreatedAtDesc(String name, Pageable pageable);
}
