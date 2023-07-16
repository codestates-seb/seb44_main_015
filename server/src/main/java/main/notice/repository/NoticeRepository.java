package main.notice.repository;

import main.notice.entity.Notice;
import main.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

    Optional<Notice> findByNoticeId(Long noticeId);
    List<Notice> findAllByCompanyCompanyId(Long companyId);

}
