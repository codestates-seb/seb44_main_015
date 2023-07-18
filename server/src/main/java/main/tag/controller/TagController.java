package main.tag.controller;

import lombok.RequiredArgsConstructor;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.notice.service.NoticeService;
import main.tag.dto.TagDto;
import main.tag.entity.Tag;
import main.tag.mapper.TagMapper;
import main.tag.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/tag")
@RequiredArgsConstructor
@Validated
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;
    private final NoticeService noticeService;
    private final NoticeMapper noticeMapper;
    @PostMapping
    public ResponseEntity postTag(@Valid @RequestBody TagDto.Post tagPostDto){
        tagService.createTag(tagMapper.tagPostDtoToTag(tagPostDto));
        return new ResponseEntity(HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity getTags(@RequestParam(required = false, defaultValue = "10") int limit){

        List<Tag> tags = tagService.findTags(limit);

        return new ResponseEntity(tagMapper.tagsToTagResponses(tags), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity getTagsSearch(@RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "0") int page,
                                        @RequestParam String tag){
        List<Notice> notices = noticeService.findNoticesPage(tag, page, limit);
        return new ResponseEntity<>(noticeMapper.noticesToNoticeResponseDtos(notices),HttpStatus.OK);
    }

}
