package main.rating.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
@Getter
@Setter
@NoArgsConstructor
public class RatingResponseDto {
    @NotBlank
    private int score;

    @NotBlank
    private Long userId;

    @NotBlank
    private Long noticeId;

    @NotBlank
    private Long companyId;
}
