package main.rating.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.rating.entity.Rating;
import main.rating.repository.RatingRepository;
import main.user.entity.User;
import main.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RatingService {
    private final RatingRepository ratingRepository;

    public Rating createRating(Rating rating){

        verifyExistRating(rating);
        Rating createRating = ratingRepository.save(rating);
        User user = createRating.getUser();
        user.setAvgRating();
        return createRating;
    }

    public List<Rating> findRatings(Long userId){
        return ratingRepository.findByUserUserId(userId);
    }

    private void verifyExistRating(Rating rating){
        Optional<Rating> optionalRating = ratingRepository.findByUserUserIdAndNoticeNoticeId(rating.getUser().getUserId(), rating.getNotice().getNoticeId());
        if(optionalRating.isPresent()){
            throw new BusinessLogicException(ExceptionCode.RATING_EXISTS);
        }
    }
}
