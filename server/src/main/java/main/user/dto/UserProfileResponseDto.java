package main.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserProfileResponseDto {
    private long userId;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String phone;

    @NotBlank
    private String name;

    private long cardId;

    private int viewCount;

    private List<String> tagNames;

    private List<String> resumeContents;
}
