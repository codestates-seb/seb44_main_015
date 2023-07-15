package main.company.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.tag.entity.Tag;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class CompanyDto {

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String phone;

    private String intro;

    private List<Tag> tag;

}
