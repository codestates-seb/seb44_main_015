package main.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NoticeResponseDto {
    private long noticeId;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @NotBlank
    private int viewCount;

    @NotNull
    private LocalDateTime createdAt;

    @NotNull
    private LocalDateTime deadline;

    @NotBlank
    private String companyName;

    @NotBlank
    private String companyIntro;

    @NotBlank
    private String companyPhone;

    @NotBlank
    @Email
    private String companyEmail;

    @NotBlank
    private String companyPerson;

    @NotBlank
    private String companyAddress;

    private List<String> tagNames;
}
