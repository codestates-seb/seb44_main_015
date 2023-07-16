package main.userTag.service;


import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.tag.entity.Tag;
import main.tag.service.TagService;
import main.user.entity.User;
import main.user.service.UserService;
import main.userTag.entity.UserTag;
import main.userTag.repository.UserTagRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserTagService {
    private final UserTagRepository userTagRepository;
    private final UserService userService;
    private final TagService tagService;

    public UserTag createUserTag(Long userId, Long tagId){
        User user = userService.findUser(userId);
        Tag tag = tagService.findTag(tagId);
        UserTag userTag = new UserTag();
        userTag.setTag(tag);
        userTag.setUser(user);

        return userTagRepository.save(userTag);

    }

    private void verifyExistUserTag(Long userId, Long tagId){
        Optional<UserTag> optionalUserTag = userTagRepository.findByUserUserIdAndTagTagId(userId,tagId);

        if(optionalUserTag.isPresent()){
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
        }
    }
}
