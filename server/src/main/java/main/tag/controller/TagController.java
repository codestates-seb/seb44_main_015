package main.tag.controller;

import lombok.RequiredArgsConstructor;
import main.tag.entity.Tag;
import main.tag.mapper.TagMapper;
import main.tag.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tag")
@RequiredArgsConstructor
@Validated
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;
    @GetMapping
    public ResponseEntity getTags(@RequestParam(required = false, defaultValue = "10") int limit){

        List<Tag> tags = tagService.findTags(limit);

        return new ResponseEntity(tagMapper.tagsToTagResponses(tags), HttpStatus.OK);
    }
}
