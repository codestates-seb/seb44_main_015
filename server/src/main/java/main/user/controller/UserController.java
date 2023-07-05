package main.user.controller;

import lombok.RequiredArgsConstructor;
import main.user.dto.UserDto;
import main.user.entity.UserEntity;
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
        UserEntity user = userMapper.userPostDtoToUser(userPostDto);
        UserEntity createUser = userService.createUser(user);
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
        UserEntity user = userMapper.userPatchDtoToUser(userPatchDto);
        UserEntity updateUser = userService.updateUser(user);

        return new ResponseEntity<>(userMapper.userToUserResponseDto(updateUser), HttpStatus.OK);
    }


}
