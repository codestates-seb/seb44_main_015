package main.company.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
@Getter
@Setter
@NoArgsConstructor
public class CompanyPatchDto {

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
