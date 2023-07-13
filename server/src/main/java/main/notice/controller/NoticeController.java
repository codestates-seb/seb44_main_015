package main.notice.controller;

import lombok.RequiredArgsConstructor;
import main.card.service.CardService;
import main.cardCheck.dto.CardCheckDto;
import main.cardCheck.entity.CardCheck;
import main.cardCheck.mapper.CardCheckMapper;
import main.cardCheck.service.CardCheckService;
import main.notice.dto.NoticeDto;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.notice.service.NoticeService;
import main.user.dto.UserDto;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/notice")
@RequiredArgsConstructor
@Validated
public class NoticeController {
    private final CardCheckService cardCheckService;
    private final NoticeService noticeService;
    private final NoticeMapper noticeMapper;
    private final CardCheckMapper cardCheckMapper;
    private final CardService cardService;


    @PostMapping("/{notice_id}/card/{card_id}")
    public ResponseEntity putCard(@PathVariable("notice_id") @Positive long noticeId,
                                  @PathVariable("card_id") @Positive long cardId,
                                  Authentication authentication){
        CardCheckDto.Post putCardDto = new CardCheckDto.Post();

        putCardDto.setCard(cardService.findCard(cardId));
        putCardDto.setNotice(noticeService.findNotice(noticeId));

        cardCheckMapper.cardCheckPostDtoToCardCheck(putCardDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/{notice_id}/bookmark")
    public ResponseEntity putCard(@PathVariable("notice_id") @Positive long noticeId,
                                  Authentication authentication){
        // authentication 에서 userid추출
        /**
         * 임시 userId
         */
        Long userId = 1L;

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{notice_id}")
    public ResponseEntity getNotice(@PathVariable("notice_id") @Positive long noticeId){
        Notice getNotice = noticeService.findNotice(noticeId);


        return new ResponseEntity(noticeMapper.noticeToNoticeResponseDetailDto(getNotice), HttpStatus.OK);
    }
    @GetMapping("/{notice_id}/card")
    public ResponseEntity getCards(@PathVariable("notice_id") @Positive long noticeId,
                                   @RequestParam String sort,
                                  Authentication authentication){
        return new ResponseEntity<>(cardCheckMapper.cardChecksToCardCheckResponseDtos(cardCheckService.findCardChecks(noticeId)), HttpStatus.OK);
    }

    @PatchMapping("/{notice_id}/card/{check_id}")
    public ResponseEntity patchCardCheck(@PathVariable("notice_id") @Positive long noticeId,
                                         @PathVariable("check_id") @Positive long cardCheckId,
                                         @Valid @RequestBody CardCheckDto.Patch cardCheckPatchDto,
                                         Authentication authentication){
        cardCheckPatchDto.setCardCheckId(cardCheckId);
        cardCheckService.updateCardCheck(cardCheckMapper.cardCheckPatchDtoToCardCheck(cardCheckPatchDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
