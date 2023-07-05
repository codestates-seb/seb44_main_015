package main.user.service;

import lombok.RequiredArgsConstructor;
import main.user.entity.UserEntity;
import main.user.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserEntity createUser(UserEntity user){

        verifyExistEmail(user.getEmail());

        /**
        Password 암호화 추가
        Role 저장 추가
        */

        UserEntity savedUser = userRepository.save(user);
        return savedUser;
    }

    public UserEntity updateUser(UserEntity user){

        UserEntity updatedUser = userRepository.save(user);
        return updatedUser;
    }


    private void verifyExistEmail(String email) {
        Optional<UserEntity> useremail = userRepository.findByEmail(email);
        if (useremail.isPresent())
            //throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
            throw new IllegalArgumentException(); // 임시로넣음
    }
}
