package main.userTag.repository;

import main.userTag.entity.UserTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserTagRepository extends JpaRepository<UserTag, Long> {
    Optional<UserTag> findByUserUserIdAndTagTagId(Long userId, Long tagId);
    Optional<UserTag> findByUserUserIdAndTagName(Long userId, String tagName);
}
