package main.security.jwt.filter;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import main.company.entity.Company;
import main.company.repository.CompanyRepository;
import main.company.service.CompanyService;
import main.security.jwt.JwtTokenizer;
import main.security.jwt.dto.LoginDto;
import main.security.jwt.dto.TokenResponseDto;
import main.security.jwt.service.CustomUserDetailsService;
import main.user.entity.User;
import main.user.repository.UserRepository;
import main.user.service.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
//    private static final String CONTENT_TYPE = "application/json";
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;
    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;


    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getUserType()+":"+loginDto.getEmail(), loginDto.getPassword());

        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws ServletException, IOException {
        Object principal = authResult.getPrincipal();
        if(principal instanceof CustomUserDetailsService.CustomUserDetails) {
            User user = (User) principal;
            String accessToken = delegateAccessToken(user);
            String refreshToken = delegateRefreshToken(user);
            Long userId = user.getUserId();
            Integer expiration = jwtTokenizer.getAccessTokenExpirationMinutes();

            response.setHeader("Authorization", "Bearer" + accessToken);
            response.setHeader("Refresh", refreshToken);
            Gson gson = new Gson();
            response.getWriter().println(gson.toJson(new TokenResponseDto(userId, expiration, accessToken, refreshToken)));
            User savedUser = userRepository.findByUserId(userId).orElseThrow();
            savedUser.setRefreshToken(refreshToken);
            userRepository.save(savedUser);

            this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
        }
        else if(principal instanceof CustomUserDetailsService.CustomCompanyDetails){
            Company company = (Company) principal;
            String accessToken = delegateAccessToken(company);
            String refreshToken = delegateRefreshToken(company);
            Long companyId = company.getCompanyId();
            Integer expiration = jwtTokenizer.getAccessTokenExpirationMinutes();

            response.setHeader("Authorization", "Bearer" + accessToken);
            response.setHeader("Refresh", refreshToken);
            Gson gson = new Gson();
            response.getWriter().println(gson.toJson(new TokenResponseDto(companyId, expiration, accessToken, refreshToken)));
            Company savedCompany = companyRepository.findByCompanyId(companyId).orElseThrow();
            savedCompany.setRefreshToken(refreshToken);
            companyRepository.save(savedCompany);

            this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);

        }
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

    private String delegateRefreshToken(User user){
        Map<String, Object> claims = new HashMap<>();
        claims.put("userType", "user");
        claims.put("email", user.getEmail());
        String subject = user.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(claims, subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
    private String delegateRefreshToken(Company company){
        Map<String, Object> claims = new HashMap<>();
        claims.put("userType", "company");
        claims.put("email", company.getEmail());
        String subject = company.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(claims, subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}
