package main.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class ResumeResponseDto {
    private Long resumeId;
    private Long userId;
    @NotBlank
    private String content;
}
