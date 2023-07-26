package main.security.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class TokenResponseDto {
    private Long id;
    private String userType;
    private Integer accessTokenExpirationMinutes;
    private String accessToken;
    private String refreshToken;
}