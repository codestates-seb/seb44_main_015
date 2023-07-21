package main.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.tag.entity.Tag;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class TagDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{
        @NotBlank
        private String name;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class PostId{
        @NotBlank
        private Long tagId;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{

        private Long tagId;
        private Tag.TagCategories category;
        @NotBlank
        private String name;

    }
}
