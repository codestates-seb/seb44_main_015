package main.notice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.company.entity.Company;
import main.noticeTag.entity.NoticeTag;
import main.tag.entity.Tag;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class NoticeDto {


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{


        private Company company;
        @NotBlank
        private String title;

        @NotBlank
        private String content;

        private List<Long> tagIds;

        @NotBlank
        private LocalDateTime deadline;



    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{

        private Long noticeId;

        private String title;


        private String content;


        private LocalDateTime deadline;



    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long noticeId;

        @NotBlank
        private String title;

        @NotBlank
        private String content;

        @NotBlank
        private int viewCount;

        @NotBlank
        private LocalDateTime createdAt;

        @NotBlank
        private LocalDateTime deadline;

        @NotBlank
        private String companyName;


    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ResponseDetail{
        private long noticeId;

        @NotBlank
        private String title;

        @NotBlank
        private String content;

        @NotBlank
        private int viewCount;

        @NotBlank
        private LocalDateTime createdAt;

        @NotBlank
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


    }
}
