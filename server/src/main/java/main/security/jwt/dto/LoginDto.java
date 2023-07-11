package main.security.jwt.dto;

import lombok.Getter;

@Getter
public class LoginDto {
    private String userType;
    private String email;
    private String password;
}
