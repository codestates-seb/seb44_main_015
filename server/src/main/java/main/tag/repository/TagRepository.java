package main.tag.repository;

import main.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Optional<Tag> findByTagId(Long tagId);
    Optional<Tag> findByName(String name);
}
