package main.company.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.card.entity.Card;
import main.notice.entity.Notice;
import main.tag.entity.Tag;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
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
        @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$")
        private String phone;

        @NotBlank
        private String password;

        @NotBlank
        private String name;

        private String address;

        private String intro;

        private String person;

        private List<String> tagNames;

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
        @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$")
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
