package main.tag.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.tag.dto.TagPostDto;
import main.tag.dto.TagResponseDto;
import main.tag.entity.Tag;
import main.tag.mapper.TagMapper;
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
    private final TagMapper tagMapper;

    public Tag createTag(TagPostDto tagPostDto){
        verifyExistTag(tagPostDto.getName());
        Tag tag = tagMapper.tagPostDtoToTag(tagPostDto);
        return tagRepository.save(tag);
    }

    public Tag findTag(Long tagId){
        return findVerifyTag(tagId);
    }

    public Tag findTagByName(String name){
        return findVerifyTag(name);
    }

    public List<TagResponseDto> findTags(int limit){
        Pageable limitPageable = PageRequest.of(0, limit);


        return tagMapper.tagsToTagResponses(tagRepository.findAll(limitPageable).getContent());
    }

    public List<TagResponseDto> findTagsByCategory(String category){
        return tagMapper.tagsToTagResponses(tagRepository.findByCategory(Tag.TagCategories.valueOf(category.toUpperCase())));
    }
    private Tag findVerifyTag(Long tagId){
        Optional<Tag> optionalTag = tagRepository.findByTagId(tagId);

        return optionalTag.orElseThrow(()->(new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND)));
    }


    private void verifyExistTag(String name) {
        Optional<Tag> tag = tagRepository.findByName(name);
        if(tag.isPresent())
            throw new BusinessLogicException(ExceptionCode.TAG_EXISTS);
    }

    private Tag findVerifyTag(String name){
        Optional<Tag> optionalTag = tagRepository.findByName(name);

        return optionalTag.orElseThrow(()->(new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND)));
    }
}
