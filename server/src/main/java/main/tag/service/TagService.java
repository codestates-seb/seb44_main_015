package main.tag.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.tag.entity.Tag;
import main.tag.repository.TagRepository;
import main.user.entity.User;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;

    public Tag createTag(Tag tag){
        verifyExistTag(tag.getName());
        return tagRepository.save(tag);
    }

    public Tag findTag(Long tagId){
        return findVerifyTag(tagId);
    }

    public List<Tag> findTags(int limit){
        Pageable limitPageable = PageRequest.of(0, limit);
        return tagRepository.findAll(limitPageable).getContent();
    }

    public List<Tag> findTagsByCategory(String category){
        return tagRepository.findByCategory(Tag.TagCategories.valueOf(category.toUpperCase()));
    }
    private Tag findVerifyTag(Long tagId){
        Optional<Tag> optionalTag = tagRepository.findByTagId(tagId);

        return optionalTag.orElseThrow(()->(new BusinessLogicException(ExceptionCode.TAG_EXISTS)));
    }


    private void verifyExistTag(String name) {
        Optional<Tag> tag = tagRepository.findByName(name);
        if(tag.isPresent())
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
    }
}
