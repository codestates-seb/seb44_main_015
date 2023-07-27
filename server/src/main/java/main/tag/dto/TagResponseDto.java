package main.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.tag.entity.Tag;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class TagResponseDto {
    private Long tagId;
    private Tag.TagCategories category;
    @NotBlank
    private String name;
}
