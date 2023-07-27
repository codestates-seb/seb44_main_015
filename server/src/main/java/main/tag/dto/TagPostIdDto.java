package main.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class TagPostIdDto {
    @NotBlank
    private Long tagId;
    private Long id;
}
