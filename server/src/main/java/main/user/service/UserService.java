package main.user.service;

import lombok.RequiredArgsConstructor;
import main.card.entity.Card;
import main.card.service.CardService;
import main.company.entity.Company;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import main.notice.repository.NoticeRepository;
import main.resume.service.ResumeService;
import main.security.utils.CustomAuthorityUtils;
import main.tag.entity.Tag;
import main.user.entity.User;
import main.user.repository.UserRepository;
import main.userTag.service.UserTagService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final NoticeRepository noticeRepository;
    private final UserTagService userTagService;
    private final CardService cardService;
    private final ResumeService resumeService;

    public User createUser(List<Long> tagIds, List<String> resumes, User user){

        verifyExistEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail(),user);
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        if(tagIds != null) {
            for (Long tagId : tagIds) {
                savedUser.getUserTags().add(userTagService.signupCreateUserTag(user, tagId));
            }
        }
        if(resumes != null) {
            for (String resume : resumes) {
                savedUser.getResumes().add(resumeService.createResumeByString(resume, savedUser));
            }
        }
        Card card = cardService.createCard(savedUser);
        savedUser.setCard(card);
        return savedUser;
    }

/*
    public void addBookmark(Long userId, Long noticeId) {
        User user = userRepository.findById(userId).orElseThrow();
        Notice notice = noticeRepository.findById(noticeId).orElseThrow();

        user.getBookmarks().add(notice);
        userRepository.save(user);
    }
*/
    public void logoutUser(long userId){
        User user = findUser(userId);
        user.setRefreshToken(null);
        userRepository.save(user);
    }

    public User updateUser(User user){

        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getPassword())
                .ifPresent(password -> findUser.setPassword(passwordEncoder.encode(password)));
        Optional.ofNullable(user.getAvgRating())
                .ifPresent(avgRating -> findUser.setAvgRating(avgRating));
        Optional.ofNullable(user.getRefreshToken())
                .ifPresent(refreshToken -> findUser.setRefreshToken(refreshToken));
        Optional.ofNullable(user.getEmail())
                .ifPresent(variable -> findUser.setEmail(variable));
        Optional.ofNullable(user.getPhone())
                .ifPresent(variable -> findUser.setPhone(variable));
        Optional.ofNullable(user.getName())
                .ifPresent(variable -> findUser.setName(variable));
        Optional.ofNullable(user.getRoles())
                .ifPresent(variable -> findUser.setRoles(variable));

        User updatedUser = userRepository.save(findUser);
        return updatedUser;
    }

/*
    public List<Notice> findBookmarks(Long userId){
        User user = findVerifiedUser(userId);
        return user.getBookmarks();
    }
*/

    public User findUser(long userId){

        User findUser = findVerifiedUser(userId);
        return findUser;
    }

    public User findUserByEmail(String email){
        User user = findVerifiedUserByEmail(email);
        return user;
    }

    public User findOtherUser(long userId){

        User findUser = findVerifiedUser(userId);
        findUser.getCard().addViewCount();
        return userRepository.save(findUser);
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
    public User findVerifiedUserByEmail(String email) {
        Optional<User> optionalUser =
                userRepository.findByEmail(email);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }

    public User findVerifiedUserByRefreshToken(String refreshToken) {
        Optional<User> optionalUser =
                userRepository.findByRefreshToken(refreshToken);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.REFRESH_TOKEN_NOT_FOUND));

        return findUser;
    }


}
