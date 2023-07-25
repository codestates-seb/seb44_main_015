package main.security.jwt.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class LoginDto {
    @NotBlank
    private String userType;
    @NotBlank
    private String email;
    @NotBlank
    private String password;
}
