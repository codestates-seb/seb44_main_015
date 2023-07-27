package main.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class NoticePatchDto {
    private Long noticeId;

    private String title;


    private String content;


    private LocalDateTime deadline;
}
