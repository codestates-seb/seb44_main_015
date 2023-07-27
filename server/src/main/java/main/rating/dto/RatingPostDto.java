package main.rating.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.notice.entity.Notice;
import main.user.entity.User;

import javax.validation.constraints.NotBlank;
@Getter
@Setter
@NoArgsConstructor
public class RatingPostDto {
    private Long userId;
    @NotBlank
    private Long noticeId;
    @NotBlank
    private int score;
}
