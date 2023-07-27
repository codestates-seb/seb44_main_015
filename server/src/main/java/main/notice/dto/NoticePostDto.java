package main.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.company.entity.Company;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NoticePostDto {
    private Long companyId;
    @NotBlank
    private String title;

    @NotBlank
    private String content;

    private List<String> tagNames;

    @NotNull
    private LocalDateTime deadline;
}
