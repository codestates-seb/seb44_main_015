package main.notice.repository;

import main.notice.entity.Notice;
import main.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

    Optional<Notice> findByNoticeId(Long noticeId);
    List<Notice> findAllByCompanyCompanyId(Long companyId);
    List<Notice> findAllByOrderByCreatedAtDesc(Pageable pageable);
    List<Notice> findAllByDeadlineAfterAndTitleContainingOrDeadlineAfterAndContentContaining(LocalDateTime deadline1, String title, LocalDateTime deadline2, String content, Pageable pageable);
}
