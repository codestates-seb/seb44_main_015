package main.card.controller;

import lombok.RequiredArgsConstructor;
import main.card.entity.Card;
import main.card.mapper.CardMapper;
import main.card.service.CardService;
import main.notice.entity.Notice;
import main.notice.service.NoticeService;
import main.rating.dto.RatingDto;
import main.rating.entity.Rating;
import main.rating.mapper.RatingMapper;
import main.rating.service.RatingService;
import main.user.dto.UserDto;
import main.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/card")
@RequiredArgsConstructor
@Validated
public class CardController {
    private final UserService userService;
    private final RatingService ratingService;
    private final NoticeService noticeService;
    private final RatingMapper ratingMapper;
    private final CardService cardService;
    private final CardMapper cardMapper;

    @PostMapping("{card_id}/rating")
    public ResponseEntity postRating(@Valid @RequestBody RatingDto.Post ratingPostDto,
                                     @PathVariable("card_id") @Positive long cardId,
                                     Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();

        Notice findNotice = noticeService.findNotice(ratingPostDto.getNoticeId());

        if(companyId != findNotice.getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        ratingPostDto.setNotice(findNotice);
        ratingPostDto.setUser(userService.findUserByCard(cardId));
        ratingService.createRating(ratingMapper.ratingPostDtoToRating(ratingPostDto));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/weekly")
    public ResponseEntity getMostViewedCards(@RequestParam(required = false, defaultValue = "4") int limit,
                                             @RequestParam(required = false, defaultValue = "0") int page){
        List<Card> cards = cardService.findMostViewedCards(page, limit);
        return new ResponseEntity(cardMapper.cardsToCardResponsesDto(cards),HttpStatus.OK);
    }
}
