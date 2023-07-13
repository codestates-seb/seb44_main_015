package main.user.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.security.utils.CustomAuthorityUtils;
import main.user.entity.User;
import main.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public User createUser(User user){

        verifyExistEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail(),user);
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        return savedUser;
    }

    public User updateUser(User user){

        User updatedUser = userRepository.save(user);
        return updatedUser;
    }


    public User findUser(long userId){

        User findUser = findVerifiedUser(userId);
        return findUser;
    }

    public List<User> findUsers(){
        return userRepository.findAll();
    }


    public void deleteUser(long userId){
        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);
    }
    private void verifyExistEmail(String email) {
        Optional<User> userEmail = userRepository.findByEmail(email);
        if (userEmail.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
    public User findVerifiedUser(long userId) {
        Optional<User> optionalUser =
                userRepository.findByUserId(userId);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }


}
