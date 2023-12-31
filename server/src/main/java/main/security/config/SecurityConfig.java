package main.security.config;

import lombok.RequiredArgsConstructor;
import main.company.repository.CompanyRepository;
import main.security.jwt.JwtTokenizer;
import main.security.jwt.filter.JwtAuthenticationFilter;
import main.security.jwt.filter.JwtVerificationFilter;
import main.security.jwt.handler.UserAccessDeniedHandler;
import main.security.jwt.handler.UserAuthenticationEntryPoint;
import main.security.jwt.handler.UserAuthenticationFailureHandler;
import main.security.jwt.handler.UserAuthenticationSuccessHandler;
import main.security.utils.CustomAuthorityUtils;
import main.user.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;



    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST,"/logout").hasAnyRole("COMPANY","USER")
                        .antMatchers(HttpMethod.DELETE, "/user/{user_id}").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE,"/company/{company_id}").hasRole("COMPANY")

                        .antMatchers(HttpMethod.POST,"/tag").hasAnyRole("USER","COMPANY")

                        .antMatchers(HttpMethod.POST,"/notice/{notice_id}/card/{card_id}").hasRole("USER")
                        .antMatchers(HttpMethod.POST,"/notice/{notice_id}/bookmark").hasAnyRole("USER","ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/user/profile/{user_id}").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "user/{user_id}/tag").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "user/{user_id}/tag/{tag_id}").hasRole("USER")
                        .antMatchers(HttpMethod.POST,"user/{user_id}/resume").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH,"user/{user_id}/resume/{resume_id}").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE,"user/{user_id}/resume/{resume_id}").hasRole("USER")
                        .antMatchers(HttpMethod.GET,"user/{user_id}/notice").hasRole("USER")

                        .antMatchers(HttpMethod.PATCH,"/company/profile/{company_id}").hasRole("COMPANY")
                        .antMatchers(HttpMethod.POST,"/company/{company_id}/tag").hasRole("COMPANY")
                        .antMatchers(HttpMethod.DELETE,"/company/{company_id}/tag/{tag_id}").hasRole("COMPANY")
                        .antMatchers(HttpMethod.POST,"/notice").hasRole("COMPANY")
                        .antMatchers(HttpMethod.PATCH,"/notice/{notice_id}").hasRole("COMPANY")
                        .antMatchers(HttpMethod.DELETE,"/notice/{notice_id}").hasRole("COMPANY")
                        .antMatchers(HttpMethod.GET,"/notice/{notice_id}/card").hasRole("COMPANY")
                        .antMatchers(HttpMethod.PATCH,"/notice/{notice_id}/card/{check_id}").hasRole("COMPANY")
                        .antMatchers(HttpMethod.POST,"/card/{card_id}/rating").hasRole("COMPANY")
                        .anyRequest().permitAll()
                );
/*                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, customAuthorityUtils, userRepository))
                );*/

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST","PATCH","DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, userRepository, companyRepository);
            jwtAuthenticationFilter.setFilterProcessesUrl("/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, customAuthorityUtils);


            builder.addFilterAfter(jwtAuthenticationFilter, LogoutFilter.class)
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
