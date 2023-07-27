package main.company.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
public class CompanyResponseDto {
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
