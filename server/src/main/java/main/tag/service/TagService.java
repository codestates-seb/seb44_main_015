package main.tag.service;

import lombok.RequiredArgsConstructor;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.tag.entity.Tag;
import main.tag.repository.TagRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;

    public Tag findTag(Long tagId){
        return findVerifyTag(tagId);
    }

    public List<Tag> findTags(int limit){
        Pageable limitPageable = PageRequest.of(0, limit);
        return tagRepository.findAll(limitPageable).getContent();
    }
    private Tag findVerifyTag(Long tagId){
        Optional<Tag> optionalTag = tagRepository.findByTagId(tagId);

        return optionalTag.orElseThrow(()->(new BusinessLogicException(ExceptionCode.USER_EXISTS)));
    }
}
