package main.noticeTag.repository;

import main.noticeTag.entity.NoticeTag;
import main.noticeTag.entity.NoticeTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NoticeTagRepository extends JpaRepository<NoticeTag, Long> {
    Optional<NoticeTag> findByNoticeNoticeIdAndTagTagId(Long noticeId, Long tagId);
}
