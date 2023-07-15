package main.user.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import main.notice.repository.NoticeRepository;
import main.security.utils.CustomAuthorityUtils;
import main.tag.entity.Tag;
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
    private final NoticeRepository noticeRepository;

    public User createUser(User user){

        verifyExistEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail(),user);
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        return savedUser;
    }

    public void addBookmark(Long userId, Long noticeId) {
        User user = userRepository.findById(userId).orElseThrow();
        Notice notice = noticeRepository.findById(noticeId).orElseThrow();

        user.getBookmarks().add(notice);
        userRepository.save(user);
    }

    public void addTag(Long userId, Tag tag){
        User user = findVerifiedUser(userId);
        user.getTags().add(tag);
        userRepository.save(user);
    }

    public User updateUser(User user){

        User updatedUser = userRepository.save(user);
        return updatedUser;
    }

    public List<Notice> findBookmarks(Long userId){
        User user = findVerifiedUser(userId);
        return user.getBookmarks();
    }

    public User findUser(long userId){

        User findUser = findVerifiedUser(userId);
        return findUser;
    }

    public User findUserByCard(long cardId){

        return userRepository.findByCardCardId(cardId).orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

    public List<User> findUsers(){
        return userRepository.findAll();
    }

    public void logoutUser(Long userId){
        User user = findVerifiedUser(userId);
        user.setRefreshToken(null);
        userRepository.save(user);
    }

    public void deleteUser(Long userId){
        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);
    }
    private void verifyExistEmail(String email) {
        Optional<User> userEmail = userRepository.findByEmail(email);
        if (userEmail.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
    public User findVerifiedUser(Long userId) {
        Optional<User> optionalUser =
                userRepository.findByUserId(userId);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }


}
