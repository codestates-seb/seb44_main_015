package main.user.controller;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import main.bookmark.entity.Bookmark;
import main.bookmark.service.BookmarkService;
import main.cardCheck.entity.CardCheck;
import main.cardCheck.service.CardCheckService;
import main.notice.dto.NoticeResponseDto;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.notice.service.NoticeService;
import main.rating.dto.RatingResponseDto;
import main.rating.entity.Rating;
import main.rating.mapper.RatingMapper;
import main.rating.repository.RatingRepository;
import main.rating.service.RatingService;
import main.resume.dto.ResumeDto;
import main.resume.dto.ResumePatchDto;
import main.resume.dto.ResumePostDto;
import main.resume.dto.ResumeResponseDto;
import main.resume.entity.Resume;
import main.resume.mapper.ResumeMapper;
import main.resume.service.ResumeService;
import main.tag.dto.TagDto;
import main.tag.dto.TagPostIdDto;
import main.tag.dto.TagPostNameDto;
import main.tag.entity.Tag;
import main.user.dto.*;
import main.user.entity.User;
import main.user.mapper.UserMapper;
import main.user.service.UserService;
import main.userTag.service.UserTagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final UserService userService;
    private final RatingService ratingService;
    private final ResumeService resumeService;
    private final UserTagService userTagService;
    private final BookmarkService bookmarkService;
    private final NoticeService noticeService;

    @ApiResponses(value = {
            @ApiResponse(responseCode = "201",
                    content = @Content(schema = @Schema(implementation = UserResponseDto.class)))})
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){
        UserResponseDto responseDto = userService.createUser(userPostDto);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "201",
                    content = @Content(schema = @Schema(implementation = ResumeResponseDto.class))),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PostMapping("/{user_id}/resume")
    public ResponseEntity postResume(@PathVariable("user_id") @Positive long userId,
                                     @Valid @RequestBody ResumePostDto resumeDto,
                                     Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkUserId = ((Number) principal.get("id")).longValue();
        if(userId != checkUserId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        resumeDto.setUserId(userId);
        ResumeResponseDto responseDto = resumeService.createResume(resumeDto);

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403"),
            @ApiResponse(responseCode = "201")})
    @PostMapping("/{user_id}/tag")
    public ResponseEntity postResume(@PathVariable("user_id") @Positive long userId,
                                     @RequestBody TagPostNameDto tagNameDto,
                                     Authentication authentication){

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkUserId = ((Number) principal.get("id")).longValue();
        if(userId != checkUserId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        tagNameDto.setId(userId);
        userTagService.createUserTag(tagNameDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(schema = @Schema(implementation = UserResponseDto.class))),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PatchMapping("/profile/{user_id}")
    public ResponseEntity patchUser(@PathVariable("user_id") @Positive long userId,
                                    @Valid @RequestBody UserPatchDto userPatchDto,
                                    Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        long checkUserId = ((Number) principal.get("userId")).longValue();
        if(userId != checkUserId) return new ResponseEntity<>(HttpStatus.FORBIDDEN);

        userPatchDto.setUserId(userId);
        UserResponseDto responseDto = userService.updateUser(userPatchDto);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PatchMapping("/{user_id}/resume/{resume_id}")
    public ResponseEntity patchResume(@PathVariable("user_id") @Positive long userId,
                                     @PathVariable("resume_id") @Positive long resumeId,
                                     @Valid @RequestBody ResumePatchDto resumeDto,
                                     Authentication authentication){

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkUserId = ((Number) principal.get("id")).longValue();
        if(userId != checkUserId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        resumeDto.setUserId(userId);
        resumeDto.setResumeId(resumeId);
        ResumeResponseDto responseDto = resumeService.updateResume(resumeDto);

        return new ResponseEntity<>(HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(schema = @Schema(implementation = UserProfileResponseDto.class)))})
    @GetMapping("/{user_id}")
    public ResponseEntity getUser(@PathVariable("user_id") @Positive long userId){

        UserProfileResponseDto responseDto = userService.findOtherUser(userId);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping("/{user_id}/bookmark")
    public ResponseEntity getUserBookmark(@PathVariable("user_id") @Positive long userId){
        List<NoticeResponseDto> responseDtos = bookmarkService.findBookmarks(userId);

        return new ResponseEntity<>(responseDtos, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = RatingResponseDto.class))))})
    @GetMapping("/{user_id}/rating")
    public ResponseEntity getUserRating(@PathVariable("user_id") @Positive long userId){

        List<RatingResponseDto> ratings = ratingService.findRatings(userId);

        return new ResponseEntity<>(ratings, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping("/{user_id}/notice")
    public ResponseEntity getUserNotice(@PathVariable("user_id") @Positive long userId){

        List<NoticeResponseDto> notices = noticeService.findUserNotices(userId);
        return new ResponseEntity<>(notices, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = UserResponseDto.class))))})
    @GetMapping
    public ResponseEntity getUsers(){

        List<UserResponseDto> users = userService.findUsers();

        return new ResponseEntity<>(users, HttpStatus.OK);
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @DeleteMapping("/delete/{user_id}")
    public ResponseEntity deleteUser(@PathVariable("user_id") long userId,
                                     Authentication authentication){
        Map<String,Object> principal = (Map) authentication.getPrincipal();
        Long authuserId = ((Number) principal.get("id")).longValue();

        if(authuserId != userId){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        userService.deleteUser(userId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @DeleteMapping("/{user_id}/tag/{tag_id}")
    public ResponseEntity deleteUserTag(@PathVariable("user_id") @Positive long userId,
                                     @PathVariable("tag_id") @Positive long tagId,
                                     Authentication authentication) {

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkUserId = ((Number) principal.get("id")).longValue();
        if (userId != checkUserId) {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        userTagService.deleteUserTag(userId,tagId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @DeleteMapping("/{user_id}/resume/{resume_id}")
    public ResponseEntity deleteResume(@PathVariable("user_id") long userId,
                                       @PathVariable("resume_id") long resumeId,
                                       Authentication authentication){
        Map<String,Object> principal = (Map) authentication.getPrincipal();
        long authuserId = ((Number) principal.get("user_id")).longValue();

        if(authuserId != userId){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        resumeService.deleteResume(resumeId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
