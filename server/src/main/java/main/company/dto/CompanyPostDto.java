package main.company.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
public class CompanyPostDto {

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
