package main.notice.controller;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import main.bookmark.service.BookmarkService;
import main.card.entity.Card;
import main.card.service.CardService;
import main.cardCheck.dto.CardCheckDto;
import main.cardCheck.dto.CardCheckPatchDto;
import main.cardCheck.dto.CardCheckPostDto;
import main.cardCheck.dto.CardCheckResponseDto;
import main.cardCheck.entity.CardCheck;
import main.cardCheck.mapper.CardCheckMapper;
import main.cardCheck.service.CardCheckService;
import main.notice.dto.*;
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
    private final UserService userService;
    private final BookmarkService bookmarkService;
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201")})
    @PostMapping
    public ResponseEntity postNotice(@Valid @RequestBody NoticePostDto noticePostDto,
                                     Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        noticePostDto.setCompanyId(companyId);
        noticeService.createNotice(noticePostDto);
        return new ResponseEntity(HttpStatus.CREATED);
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201"),
            @ApiResponse(responseCode = "401")})
    @PostMapping("/{notice_id}/card")
    public ResponseEntity putCard(@PathVariable("notice_id") @Positive long noticeId,
                                  Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long userId = ((Number) principal.get("id")).longValue();
        User user = userService.findUser(userId);

        Card findCard = user.getCard();

        CardCheckPostDto putCardDto = new CardCheckPostDto();

        putCardDto.setCardId(findCard.getCardId());
        putCardDto.setNoticeId(noticeId);

        cardCheckService.createCardCheck(putCardDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200"),
            @ApiResponse(responseCode = "401")})
    @PostMapping("/{notice_id}/bookmark")
    public ResponseEntity postBookmark(@PathVariable("notice_id") @Positive long noticeId,
                                  Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long userId = ((Number) principal.get("id")).longValue();

        bookmarkService.createBookmark(userId, noticeId);
        return new ResponseEntity<>(HttpStatus.CREATED);
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PatchMapping("/{notice_id}")
    public ResponseEntity patchNotice(@PathVariable("notice_id") @Positive long noticeId,
                                      @Valid @RequestBody NoticePatchDto noticePatchDto,
                                       Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        if(companyId != noticeService.findNotice(noticeId).getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        noticePatchDto.setNoticeId(noticeId);
        noticeService.updateNotice(noticePatchDto);
        return new ResponseEntity(HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping
    public ResponseEntity getNotices(){
        List<NoticeResponseDto> notices = noticeService.findNotices();
        return new ResponseEntity<>(notices, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping("/search")
    public ResponseEntity searchNotices(@RequestParam(required = true) String keyword,
                                        @RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "0") int page){
        List<NoticeResponseDto> notices = noticeService.searchNotices(keyword, page, limit);
        return new ResponseEntity<>(notices, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping("/new")
    public ResponseEntity getNewNotices(@RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "00") int page){
        List<NoticeResponseDto> notices = noticeService.findNoticesPage(page,limit);
        return new ResponseEntity<>(notices, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping("/scroll")
    public ResponseEntity getScrollNotice(@RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "00") int scroll){
        List<NoticeResponseDto> notices = noticeService.findNoticesScroll(scroll,limit);
        return new ResponseEntity<>(notices, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(schema = @Schema(implementation = NoticeResponseDetailDto.class)))})
    @GetMapping("/{notice_id}")
    public ResponseEntity getNotice(@PathVariable("notice_id") @Positive long noticeId){
        NoticeResponseDetailDto notice = noticeService.findNoticeAddViewCount(noticeId);


        return new ResponseEntity(notice, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = CardCheckResponseDto.class))))})
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
            List<CardCheckResponseDto> cardChecks = cardCheckService.findCardChecks(noticeId);
            return new ResponseEntity<>(cardChecks, HttpStatus.OK);
        }
        else {
            List<CardCheckResponseDto> cardChecks = cardCheckService.findCheckedCardChecks(checked, noticeId);
            return new ResponseEntity(cardChecks, HttpStatus.OK);
        }
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PatchMapping("/{notice_id}/card/{check_id}")
    public ResponseEntity patchCardCheck(@PathVariable("notice_id") @Positive long noticeId,
                                         @PathVariable("check_id") @Positive long cardCheckId,
                                         @Valid @RequestBody CardCheckPatchDto cardCheckPatchDto,
                                         Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long companyId = ((Number) principal.get("id")).longValue();
        if(companyId != noticeService.findNotice(noticeId).getCompany().getCompanyId()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }

        cardCheckPatchDto.setCardCheckId(cardCheckId);
        cardCheckService.updateCardCheck(cardCheckPatchDto);

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
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
