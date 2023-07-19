package main.user.controller;

import lombok.RequiredArgsConstructor;
import main.bookmark.entity.Bookmark;
import main.bookmark.service.BookmarkService;
import main.cardCheck.entity.CardCheck;
import main.cardCheck.service.CardCheckService;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.rating.entity.Rating;
import main.rating.mapper.RatingMapper;
import main.rating.repository.RatingRepository;
import main.rating.service.RatingService;
import main.resume.dto.ResumeDto;
import main.resume.entity.Resume;
import main.resume.mapper.ResumeMapper;
import main.resume.service.ResumeService;
import main.tag.dto.TagDto;
import main.tag.entity.Tag;
import main.user.dto.UserDto;
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
    private final UserMapper userMapper;
    private final RatingMapper ratingMapper;
    private final RatingService ratingService;
    private final ResumeMapper resumeMapper;
    private final ResumeService resumeService;
    private final NoticeMapper noticeMapper;
    private final CardCheckService cardCheckService;
    private final UserTagService userTagService;
    private final BookmarkService bookmarkService;

    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.Post userPostDto){
        User user = userMapper.userPostDtoToUser(userPostDto);
        User createUser = userService.createUser(userPostDto.getTagIds(), user);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(createUser), HttpStatus.CREATED);
    }

    @PostMapping("/{user_id}/resume")
    public ResponseEntity postResume(@PathVariable("user_id") @Positive long userId,
                                     @Valid @RequestBody ResumeDto.Post resumeDto,
                                     Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkUserId = ((Number) principal.get("id")).longValue();
        if(userId != checkUserId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        User user = userService.findUser(userId);
        resumeDto.setUser(user);
        Resume createdResume = resumeService.createResume(resumeMapper.resumePostDtoToResume(resumeDto));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/{user_id}/tag")
    public ResponseEntity postResume(@PathVariable("user_id") @Positive long userId,
                                     @RequestBody TagDto.PostId tagIdDto,
                                     Authentication authentication){

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkUserId = ((Number) principal.get("id")).longValue();
        if(userId != checkUserId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        userTagService.createUserTag(userId, tagIdDto.getTagId());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/profile/{user_id}")
    public ResponseEntity patchUser(@PathVariable("user_id") @Positive long userId,
                                    @Valid @RequestBody UserDto.Patch userPatchDto,
                                    Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        long checkUserId = ((Number) principal.get("userId")).longValue();
        if(userId != checkUserId) return new ResponseEntity<>(HttpStatus.FORBIDDEN);

        userPatchDto.setUserId(userId);
        User user = userMapper.userPatchDtoToUser(userPatchDto);
        User updateUser = userService.updateUser(user);

        return new ResponseEntity<>(userMapper.userToUserResponseDto(updateUser), HttpStatus.OK);
    }

    @PatchMapping("/{user_id}/resume/{resume_id}")
    public ResponseEntity patchResume(@PathVariable("user_id") @Positive long userId,
                                     @PathVariable("resume_id") @Positive long resumeId,
                                     @Valid @RequestBody ResumeDto.Patch resumeDto,
                                     Authentication authentication){

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkUserId = ((Number) principal.get("id")).longValue();
        if(userId != checkUserId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        User user = userService.findUser(userId);
        resumeDto.setUser(user);
        resumeDto.setResumeId(resumeId);
        Resume createdResume = resumeService.updateResume(resumeMapper.resumePatchDtoToResume(resumeDto));

        return new ResponseEntity<>(HttpStatus.CREATED);

    }

    @GetMapping("/{user_id}")
    public ResponseEntity getUser(@PathVariable("user_id") @Positive long userId){

        User findUser = userService.findOtherUser(userId);

        return new ResponseEntity<>(userMapper.userToUserProfileResponse(findUser), HttpStatus.OK);
    }

    @GetMapping("/{user_id}/bookmark")
    public ResponseEntity getUserBookmark(@PathVariable("user_id") @Positive long userId){
        List<Bookmark> bookmarks = bookmarkService.findBookmarks(userId);

        return new ResponseEntity<>(noticeMapper.bookmarksToNoticeResponseDtos(bookmarks), HttpStatus.OK);
    }

    @GetMapping("/{user_id}/rating")
    public ResponseEntity getUserRating(@PathVariable("user_id") @Positive long userId){

        List<Rating> ratings = ratingService.findRatings(userId);

        return new ResponseEntity<>(ratingMapper.ratingsToRatingResponseDtos(ratings), HttpStatus.OK);
    }

    @GetMapping("/{user_id}/notice")
    public ResponseEntity getUserNotice(@PathVariable("user_id") @Positive long userId){
        Long cardId = userService.findUser(userId).getCard().getCardId();
        List<CardCheck> cardChecks = cardCheckService.findCardChecksUser(cardId);
        List<Notice> notices = cardChecks.stream()
                .map(cardCheck -> cardCheck.getNotice())
                .collect(Collectors.toList());


        return new ResponseEntity<>(noticeMapper.noticesToNoticeResponseDtos(notices), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(){

        List<User> users = userService.findUsers();

        return new ResponseEntity<>(userMapper.usersToUserResponseDtos(users), HttpStatus.OK);
    }

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
