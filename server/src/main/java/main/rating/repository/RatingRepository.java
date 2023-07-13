package main.rating.repository;

import main.rating.entity.Rating;
import main.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> findByUserUserId(Long userId);
}
