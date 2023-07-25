package main.security.jwt.service;

import lombok.RequiredArgsConstructor;
import main.company.entity.Company;
import main.company.repository.CompanyRepository;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.security.utils.CustomAuthorityUtils;
import main.user.entity.User;
import main.user.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Locale;
import java.util.Optional;


@Component
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final CustomAuthorityUtils authorityUtils;


    @Override
    public UserDetails loadUserByUsername(String userTypeEmail) throws UsernameNotFoundException {
        String[] userTypeEmails = userTypeEmail.split(":");
        String userType = userTypeEmails[0];
        String email = userTypeEmails[1];

        if(userType.toUpperCase().equals("COMPANY")){
            Optional<Company> optionalCompany = companyRepository.findByEmail(email);
            Company findCompany = optionalCompany.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMPANY_NOT_FOUND));
            return new CustomCompanyDetails(findCompany);
        }

        else{
            Optional<User> optionalUser = userRepository.findByEmail(email);
            User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
            return new CustomUserDetails(findUser);
        }

    }

    public final class CustomUserDetails extends User implements UserDetails {
        CustomUserDetails(User user) {
            setUserId(user.getUserId());
            setName(user.getName());
            setEmail(user.getEmail());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
    public final class CustomCompanyDetails extends Company implements UserDetails {
        CustomCompanyDetails(Company company) {
            setCompanyId(company.getCompanyId());
            setName(company.getName());
            setEmail(company.getEmail());
            setPassword(company.getPassword());
            setRoles(company.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }



        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
