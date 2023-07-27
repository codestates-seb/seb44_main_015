package main.resume.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.user.entity.User;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class ResumePostDto {
    private Long userId;
    @NotBlank
    private String content;
}
