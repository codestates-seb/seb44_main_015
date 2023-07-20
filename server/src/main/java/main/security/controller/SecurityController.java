package main.security.controller;

import lombok.RequiredArgsConstructor;
import main.company.entity.Company;
import main.company.service.CompanyService;
import main.security.jwt.JwtTokenizer;
import main.user.entity.User;
import main.user.service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class SecurityController {
    private final JwtTokenizer jwtTokenizer;
    private final UserService userService;
    private final CompanyService companyService;

    @PostMapping("/logout")
    public ResponseEntity logout(Authentication authentication){
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/refresh")
    public ResponseEntity refreshAccessToken(@RequestHeader("Refresh") String refreshToken){
        String accessToken;
        try{
            String userType = jwtTokenizer.getClaims(refreshToken, jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey())).getBody().get("userType").toString();
            if(userType.equals("user")){
                User user = userService.findVerifiedUserByRefreshToken(refreshToken);
                accessToken = delegateAccessToken(user);
            }
            else if(userType.equals("company")){
                Company company = companyService.findVerifiedCompanyByRefreshToken(refreshToken);
                accessToken = delegateAccessToken(company);
            }
            else{
                throw new Exception("Wrong user type");
            }

        }
        catch (Exception e){
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
        HttpHeaders headers = new HttpHeaders();
        if(accessToken != null) {
            headers.add("Authorization", "Bearer" + accessToken);
            headers.add("Refresh", refreshToken);
            return new ResponseEntity(headers, HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    private String delegateAccessToken(User user){
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", user.getEmail());
        claims.put("roles", user.getRoles());
        claims.put("id", user.getUserId());
        claims.put("userType", "user");

        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }
    private String delegateAccessToken(Company company){
        Map<String, Object> claims = new HashMap<>();

        claims.put("email", company.getEmail());
        claims.put("roles", company.getRoles());
        claims.put("id", company.getCompanyId());
        claims.put("userType", "company");

        String subject = company.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

}
