package main.user.controller;

import lombok.RequiredArgsConstructor;
import main.rating.entity.Rating;
import main.rating.mapper.RatingMapper;
import main.rating.repository.RatingRepository;
import main.rating.service.RatingService;
import main.resume.dto.ResumeDto;
import main.resume.entity.Resume;
import main.resume.mapper.ResumeMapper;
import main.resume.service.ResumeService;
import main.user.dto.UserDto;
import main.user.entity.User;
import main.user.mapper.UserMapper;
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

    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.Post userPostDto){
        User user = userMapper.userPostDtoToUser(userPostDto);
        User createUser = userService.createUser(user);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(createUser), HttpStatus.CREATED);
    }

    @PostMapping("/{user_id}/resume")
    public ResponseEntity postResume(@PathVariable("user_id") @Positive long userId,
                                     @Valid @RequestBody ResumeDto.Post resumeDto,
                                     Authentication authentication){
        User user = userService.findUser(userId);
        resumeDto.setUser(user);
        Resume createdResume = resumeService.createResume(resumeMapper.resumePostDtoToResume(resumeDto));

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
    public ResponseEntity postResume(@PathVariable("user_id") @Positive long userId,
                                     @PathVariable("resume_id") @Positive long resumeId,
                                     @Valid @RequestBody ResumeDto.Patch resumeDto,
                                     Authentication authentication){
        User user = userService.findUser(userId);
        resumeDto.setUser(user);
        resumeDto.setResumeId(resumeId);
        Resume createdResume = resumeService.updateResume(resumeMapper.resumePatchDtoToResume(resumeDto));

        return new ResponseEntity<>(HttpStatus.CREATED);

    }

    @GetMapping("/{user_id}")
    public ResponseEntity getUser(@PathVariable("user_id") @Positive long userId){

        User findUser = userService.findUser(userId);

        return new ResponseEntity<>(userMapper.userToUserResponseDto(findUser), HttpStatus.OK);
    }

    @GetMapping("/{user_id}/bookmark")
    public ResponseEntity getUserBookmark(@PathVariable("user_id") @Positive long userId){
        //notice와 합치고 수정필요
        User findUser = userService.findUser(userId);

        return new ResponseEntity<>(userMapper.userToUserResponseDto(findUser), HttpStatus.OK);
    }

    @GetMapping("/{user_id}/rating")
    public ResponseEntity getUserRating(@PathVariable("user_id") @Positive long userId){

        List<Rating> ratings = ratingService.findRatings(userId);

        return new ResponseEntity<>(ratingMapper.ratingsToRatingResponseDtos(ratings), HttpStatus.OK);
    }

    @GetMapping("/{user_id}/notice")
    public ResponseEntity getUserNotice(@PathVariable("user_id") @Positive long userId){
        //notice와 합치고 수정필요
        User findUser = userService.findUser(userId);

        return new ResponseEntity<>(userMapper.userToUserResponseDto(findUser), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(){

        List<User> users = userService.findUsers();

        return new ResponseEntity<>(userMapper.usersToUserResponseDtos(users), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") long userId,
                                     Authentication authentication){
        Map<String,Object> principal = (Map) authentication.getPrincipal();
        long authuserId = ((Number) principal.get("userId")).longValue();

        if(authuserId != userId){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        userService.deleteUser(userId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
