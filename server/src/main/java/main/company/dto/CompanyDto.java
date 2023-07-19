package main.company.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.notice.entity.Notice;
import main.tag.entity.Tag;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CompanyDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String phone;

        @NotBlank
        private String password;

        @NotBlank
        private String name;

        private String address;

        private String intro;

        private String person;

        private List<Long> tagIds;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{

        private Long companyId;

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String phone;


        private String password;

        private String address;

        private String intro;

        private String person;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{

        private Long companyId;

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String phone;

        private String name;

        private String address;

        private String intro;

        private String person;

        private List<String> tagNames;

    }

}
