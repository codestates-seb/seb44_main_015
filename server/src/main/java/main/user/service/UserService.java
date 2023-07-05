package main.user.service;

import lombok.RequiredArgsConstructor;
import main.user.entity.User;
import main.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user){

        verifyExistEmail(user.getEmail());

        /**
        Password 암호화 추가
        Role 저장 추가
        */

        User savedUser = userRepository.save(user);
        return savedUser;
    }

    public User updateUser(User user){

        User updatedUser = userRepository.save(user);
        return updatedUser;
    }


    public User findUser(long userId){
        return new User(); // 임시
    }

    private void verifyExistEmail(String email) {
        Optional<User> useremail = userRepository.findByEmail(email);
        if (useremail.isPresent())
            //throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
            throw new IllegalArgumentException(); // 임시로넣음
    }


}
