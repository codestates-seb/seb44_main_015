package main.user.controller;

import lombok.RequiredArgsConstructor;
import main.user.dto.UserDto;
import main.user.entity.User;
import main.user.mapper.UserMapper;
import main.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.Post userPostDto){
        User user = userMapper.userPostDtoToUser(userPostDto);
        User createUser = userService.createUser(user);
        return new ResponseEntity<>(userMapper.userToUserResponseDto(createUser), HttpStatus.CREATED);
    }

    @PatchMapping("/profile/{user_id}")
    public ResponseEntity patchUser(@PathVariable("user_id") @Positive long userId,
                                    @Valid @RequestBody UserDto.Patch userPatchDto
                                    // Authentication 추가해야함
    ){
        /**
            본인확인 로직 추가
        */
        userPatchDto.setUserId(userId);
        User user = userMapper.userPatchDtoToUser(userPatchDto);
        User updateUser = userService.updateUser(user);

        return new ResponseEntity<>(userMapper.userToUserResponseDto(updateUser), HttpStatus.OK);
    }

    @GetMapping("/{user_id}")
    public ResponseEntity getUser(@PathVariable("user_id") @Positive long userId){

        User findUser = userService.findUser(userId);

        return new ResponseEntity<>(userMapper.userToUserResponseDto(findUser), HttpStatus.OK);
    }

}
