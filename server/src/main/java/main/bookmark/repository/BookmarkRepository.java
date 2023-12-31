package main.bookmark.repository;

import main.bookmark.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    Optional<Bookmark> findByUserUserIdAndNoticeNoticeId(Long userId, Long noticeId);
    List<Bookmark> findAllByUserUserId(Long userId);
}
