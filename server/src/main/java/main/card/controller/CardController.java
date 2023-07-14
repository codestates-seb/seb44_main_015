package main.card.controller;

import lombok.RequiredArgsConstructor;
import main.notice.service.NoticeService;
import main.rating.dto.RatingDto;
import main.rating.entity.Rating;
import main.rating.mapper.RatingMapper;
import main.rating.service.RatingService;
import main.user.dto.UserDto;
import main.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/card")
@RequiredArgsConstructor
@Validated
public class CardController {
    private final UserService userService;
    private final RatingService ratingService;
    private final NoticeService noticeService;
    private final RatingMapper ratingMapper;

    @PostMapping("{card_id}/rating")
    public ResponseEntity postRating(@Valid @RequestBody RatingDto.Post ratingPostDto,
                                     @PathVariable("card_id") @Positive long cardId){
        ratingPostDto.setNotice(noticeService.findNotice(ratingPostDto.getNoticeId()));
        ratingPostDto.setUser(userService.findUserByCard(cardId));
        ratingService.createRating(ratingMapper.ratingPostDtoToRating(ratingPostDto));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
