package main.notice.controller;

import lombok.RequiredArgsConstructor;
import main.bookmark.service.BookmarkService;
import main.card.entity.Card;
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
import main.user.entity.User;
import main.user.service.UserService;
import org.springframework.http.HttpEntity;
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
@RequestMapping("/notice")
@RequiredArgsConstructor
@Validated
public class NoticeController {
    private final CardCheckService cardCheckService;
    private final NoticeService noticeService;
    private final NoticeMapper noticeMapper;
    private final CardCheckMapper cardCheckMapper;
    private final CardService cardService;
    private final UserService userService;
    private final BookmarkService bookmarkService;

    @PostMapping
    public ResponseEntity postNotice(@Valid @RequestBody NoticeDto.Post noticePostDto,
                                     Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        List<String> tagNames = noticePostDto.getTagNames();
        Notice notice = noticeMapper.noticePostDtoToNotice(noticePostDto);
        noticeService.createNotice(companyId, tagNames, notice);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PostMapping("/{notice_id}/card")
    public ResponseEntity putCard(@PathVariable("notice_id") @Positive long noticeId,
                                  Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long userId = ((Number) principal.get("id")).longValue();
        User user = userService.findUser(userId);

        Card findCard = user.getCard();

        CardCheckDto.Post putCardDto = new CardCheckDto.Post();

        putCardDto.setCard(findCard);
        putCardDto.setNotice(noticeService.findNotice(noticeId));

        cardCheckService.createCardCheck(cardCheckMapper.cardCheckPostDtoToCardCheck(putCardDto));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/{notice_id}/bookmark")
    public ResponseEntity postBookmark(@PathVariable("notice_id") @Positive long noticeId,
                                  Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long userId = ((Number) principal.get("id")).longValue();

        bookmarkService.createBookmark(userId, noticeId);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{notice_id}")
    public ResponseEntity patchNotice(@PathVariable("notice_id") @Positive long noticeId,
                                      @Valid @RequestBody NoticeDto.Patch noticePatchDto,
                                       Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        if(companyId != noticeService.findNotice(noticeId).getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        noticeService.updateNotice(noticeMapper.noticePatchDtoToNotice(noticePatchDto));
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getNotices(){
        List<Notice> notices = noticeService.findNotices();
        return new ResponseEntity<>(noticeMapper.noticesToNoticeResponseDtos(notices), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchNotices(@RequestParam(required = true) String name,
                                        @RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "0") int page){
        List<Notice> notices = noticeService.searchNotices(name, page, limit);
        return new ResponseEntity<>(noticeMapper.noticesToNoticeResponseDtos(notices), HttpStatus.OK);
    }

    @GetMapping("/new")
    public ResponseEntity getNewNotices(@RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "00") int page){
        List<Notice> notices = noticeService.findNoticesPage(page,limit);
        return new ResponseEntity<>(noticeMapper.noticesToNoticeResponseDtos(notices), HttpStatus.OK);
    }

    @GetMapping("/scroll")
    public ResponseEntity getScrollNotice(@RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "00") int scroll){
        List<Notice> notices = noticeService.findNoticesScroll(scroll,limit);
        return new ResponseEntity<>(noticeMapper.noticesToNoticeResponseDtos(notices), HttpStatus.OK);
    }

    @GetMapping("/{notice_id}")
    public ResponseEntity getNotice(@PathVariable("notice_id") @Positive long noticeId){
        Notice getNotice = noticeService.findNoticeAddViewCount(noticeId);


        return new ResponseEntity(noticeMapper.noticeToNoticeResponseDetailDto(getNotice), HttpStatus.OK);
    }
    @GetMapping("/{notice_id}/card")
    public ResponseEntity getCards(@PathVariable("notice_id") @Positive long noticeId,
                                  @RequestParam(required = false, defaultValue = "") String checked,
                                  Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        if(companyId != noticeService.findNotice(noticeId).getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        if(checked.equals("")){
            List<CardCheck> cardChecks = cardCheckService.findCardChecks(noticeId);
            return new ResponseEntity<>(cardCheckMapper.cardChecksToCardCheckResponseDtos(cardCheckService.findCardChecks(noticeId)), HttpStatus.OK);
        }
        else {
            List<CardCheck> cardChecks = cardCheckService.findCheckedCardChecks(checked, noticeId);
            return new ResponseEntity(cardCheckMapper.cardChecksToCardCheckResponseDtos(cardChecks), HttpStatus.OK);
        }
    }

    @PatchMapping("/{notice_id}/card/{check_id}")
    public ResponseEntity patchCardCheck(@PathVariable("notice_id") @Positive long noticeId,
                                         @PathVariable("check_id") @Positive long cardCheckId,
                                         @Valid @RequestBody CardCheckDto.Patch cardCheckPatchDto,
                                         Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        if(companyId != noticeService.findNotice(noticeId).getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }

        cardCheckPatchDto.setCardCheckId(cardCheckId);
        cardCheckService.updateCardCheck(cardCheckMapper.cardCheckPatchDtoToCardCheck(cardCheckPatchDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{notice_id}")
    public ResponseEntity deleteNotice(@PathVariable("notice_id") @Positive long noticeId,
                                       Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        if(companyId != noticeService.findNotice(noticeId).getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        noticeService.deleteNotice(noticeId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
