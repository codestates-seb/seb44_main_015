package main.tag.controller;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import main.notice.dto.NoticeResponseDto;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.notice.service.NoticeService;
import main.rating.dto.RatingResponseDto;
import main.tag.dto.TagDto;
import main.tag.dto.TagPostDto;
import main.tag.dto.TagResponseDto;
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
    private final NoticeService noticeService;
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201")})
    @PostMapping
    public ResponseEntity postTag(@Valid @RequestBody TagPostDto tagPostDto){
        tagService.createTag(tagPostDto);
        return new ResponseEntity(HttpStatus.CREATED);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = TagResponseDto.class))))})
    @GetMapping
    public ResponseEntity getTags(@RequestParam(required = false, defaultValue = "10") int limit){

        List<TagResponseDto> tags = tagService.findTags(limit);

        return new ResponseEntity(tags, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = TagResponseDto.class))))})
    @GetMapping("/category")
    public ResponseEntity getTagsByCategory(@RequestParam String category){
        List<TagResponseDto> tags = tagService.findTagsByCategory(category.toUpperCase());
        return new ResponseEntity(tags, HttpStatus.OK);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping("/search")
    public ResponseEntity getTagsSearch(@RequestParam(required = false, defaultValue = "10") int limit,
                                        @RequestParam(required = false, defaultValue = "0") int page,
                                        @RequestParam String tag){
        List<NoticeResponseDto> notices = noticeService.findNoticesPage(tag, page, limit);
        return new ResponseEntity<>(notices, HttpStatus.OK);
        //r
    }

}
