package main.company.controller;

import lombok.RequiredArgsConstructor;
import main.company.dto.CompanyDto;
import main.company.entity.Company;
import main.company.mapper.CompanyMapper;
import main.company.service.CompanyService;
import main.companyTag.entity.CompanyTag;
import main.companyTag.repository.CompanyTagRepository;
import main.companyTag.service.CompanyTagService;
import main.notice.dto.NoticeDto;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.notice.service.NoticeService;
import main.tag.entity.Tag;

import main.tag.mapper.TagMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import java.util.*;
import java.util.Optional;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
@Validated
public class CompanyController {

    private final CompanyService companyService;
    private final CompanyMapper companyMapper;
    private final CompanyTagService companyTagService;
    private final TagMapper tagMapper;
    private final NoticeService noticeService;
    private final NoticeMapper noticeMapper;

    @PostMapping
    public ResponseEntity signUpCompany(@Valid @RequestBody CompanyDto.Post companyPostDto){
        companyService.createCompany(companyMapper.companyPostDtoToCompany(companyPostDto));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @GetMapping("/{company_id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable("company_id") Long companyId) {
        Optional<Company> companyOptional = companyService.getCompanyById(companyId);
        return companyOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PatchMapping("/profile/{company_id}")
    public ResponseEntity<String> updateCompanyProfile(
            @PathVariable("company_id") Long companyId,
            @Valid @RequestBody CompanyDto.Patch companyPatchDto) {

        Company company = companyMapper.companyPatchDtoToCompany(companyPatchDto);
        company.setCompanyId(companyId);
        Company updatedCompany = companyService.updateCompanyProfile(company);

        if (updatedCompany != null) {
            return ResponseEntity.ok("profile updated success"); //프로필 수정이 완료되었을때
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update profile"); //프로필 수정 실패
        }
    }

    @GetMapping("/{company_id}/tag")
    public ResponseEntity getCompanyTags(@PathVariable("company_id") Long companyId){
        List<CompanyTag> companyTags = companyTagService.findCompanyTags(companyId);
        return new ResponseEntity<>(tagMapper.companyTagsToTagResponses(companyTags), HttpStatus.OK);
    }

    @GetMapping("/{company_id}/notice")
    public ResponseEntity getCompanyNotices(@PathVariable("company_id") Long companyId){
        List<Notice> notices = noticeService.findNoticesByCompanyId(companyId);
        return new ResponseEntity(noticeMapper.noticesToNoticeResponseDtos(notices), HttpStatus.OK);
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
