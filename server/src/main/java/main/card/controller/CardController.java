package main.card.controller;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import main.card.dto.CardResponseDto;
import main.card.entity.Card;
import main.card.mapper.CardMapper;
import main.card.repository.CardRepository;
import main.card.service.CardService;
import main.notice.dto.NoticeResponseDto;
import main.notice.entity.Notice;
import main.notice.service.NoticeService;
import main.rating.dto.RatingDto;
import main.rating.dto.RatingPostDto;
import main.rating.entity.Rating;
import main.rating.mapper.RatingMapper;
import main.rating.service.RatingService;
import main.response.MultiResponseDto;
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
    private final RatingService ratingService;
    private final NoticeService noticeService;
    private final CardService cardService;

    @ApiResponses(value = {
            @ApiResponse(responseCode = "201"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PostMapping("{card_id}/rating")
    public ResponseEntity postRating(@Valid @RequestBody RatingPostDto ratingPostDto,
                                     @PathVariable("card_id") @Positive long cardId,
                                     Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();

        Notice findNotice = noticeService.findNotice(ratingPostDto.getNoticeId());

        if(companyId != findNotice.getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        ratingPostDto.setUserId(cardService.findCard(cardId).getUser().getUserId());
        ratingService.createRating(ratingPostDto);

        return new ResponseEntity<>(HttpStatus.CREATED);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = CardResponseDto.class))))})
    @GetMapping("/weekly")
    public ResponseEntity getMostViewedCards(@RequestParam(required = false, defaultValue = "4") int limit,
                                             @RequestParam(required = false, defaultValue = "0") int page){
        List<CardResponseDto> cards = cardService.findMostViewedCards(page, limit);
        return new ResponseEntity(cards,HttpStatus.OK);
        //r
    }
}
