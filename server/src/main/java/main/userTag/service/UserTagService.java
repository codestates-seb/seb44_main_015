package main.userTag.service;


import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.tag.entity.Tag;
import main.tag.service.TagService;
import main.user.entity.User;
import main.user.repository.UserRepository;
import main.user.service.UserService;
import main.userTag.entity.UserTag;
import main.userTag.repository.UserTagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class UserTagService {
    private final UserTagRepository userTagRepository;
    private final UserRepository userRepository;
    private final TagService tagService;

    public UserTag createUserTag(Long userId, Long tagId){
        verifyExistUserTag(userId, tagId);
        User user = userRepository.findByUserId(userId).orElseThrow();
        Tag tag = tagService.findTag(tagId);
        UserTag userTag = new UserTag();
        userTag.setTag(tag);
        userTag.setUser(user);

        return userTagRepository.save(userTag);
    }

    public UserTag signupCreateUserTag(User user, Long tagId){
        Tag tag = tagService.findTag(tagId);
        UserTag userTag = new UserTag();
        userTag.setUser(user);
        userTag.setTag(tag);
        return userTagRepository.save(userTag);
    }

    public void deleteUserTag(Long userId, Long tagId){
        UserTag userTag = userTagRepository.findByUserUserIdAndTagTagId(userId, tagId).orElseThrow();
        userTagRepository.delete(userTag);
    }

    private void verifyExistUserTag(Long userId, Long tagId){
        Optional<UserTag> optionalUserTag = userTagRepository.findByUserUserIdAndTagTagId(userId,tagId);

        if(optionalUserTag.isPresent()){
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
        }
    }
}
