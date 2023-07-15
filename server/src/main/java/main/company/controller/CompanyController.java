package main.company.controller;

import main.company.dto.CompanyDto;
import main.company.entity.Company;
import main.company.service.CompanyService;
import main.tag.entity.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import java.util.Optional;

@RestController
@RequestMapping("/company")
public class CompanyController {

    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/{company_id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable("company_id") Long companyId) {
        Optional<Company> companyOptional = companyService.getCompanyById(companyId);
        return companyOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PatchMapping("/profile/{company_id}")
    public ResponseEntity<String> updateCompanyProfile(
            @PathVariable("company_id") Long companyId,
            @RequestBody CompanyDto companyDto) {

        Company updatedCompany = companyService.updateCompanyProfile(companyId, companyDto.getEmail(),
                companyDto.getPhone(), companyDto.getIntro());

        if (updatedCompany != null) {
            return ResponseEntity.ok("profile updated success"); //프로필 수정이 완료되었을때
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update profile"); //프로필 수정 실패
        }
    }
/** 태그저장 코드, 임시작성,
 @GetMapping("/{company_id}/tag")
 public ResponseEntity<List<Tag>> getCompanyTags(@PathVariable("company_id") Long companyId) {
 Optional<Company> companyOptional = companyService.getCompanyById(companyId);
 if (companyOptional.isPresent()) {
 Company company = companyOptional.get();
 List<Tag> tags = company.getTags();
 return ResponseEntity.ok(tags);
 } else {
 return ResponseEntity.notFound().build();
 }
 } **/

/**추가 코드 필요 **/
}
