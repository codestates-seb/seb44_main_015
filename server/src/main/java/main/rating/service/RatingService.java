package main.rating.service;

import lombok.RequiredArgsConstructor;
import main.rating.entity.Rating;
import main.rating.repository.RatingRepository;
import main.user.entity.User;
import main.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingService {
    private final RatingRepository ratingRepository;

    public List<Rating> findRatings(Long userId){
        return ratingRepository.findByUserUserId(userId);
    }
}
