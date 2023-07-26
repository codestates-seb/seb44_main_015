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
import main.tag.dto.TagDto;
import main.tag.entity.Tag;

import main.tag.mapper.TagMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
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

    @PostMapping("/signup")
    public ResponseEntity signUpCompany(@Valid @RequestBody CompanyDto.Post companyPostDto){
        companyService.createCompany(companyPostDto.getTagNames(), companyMapper.companyPostDtoToCompany(companyPostDto));

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @GetMapping("/{company_id}")
    public ResponseEntity getCompanyById(@PathVariable("company_id") Long companyId) {
        Company company = companyService.findCompany(companyId);
        return new ResponseEntity<>(companyMapper.companyToCompanyResponseDto(company), HttpStatus.OK);

    }

    @PatchMapping("/profile/{company_id}")
    public ResponseEntity<String> updateCompanyProfile(@PathVariable("company_id") Long companyId,
                                                       @Valid @RequestBody CompanyDto.Patch companyPatchDto,
                                                       Authentication authentication) {

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long authCompanyId = ((Number) principal.get("id")).longValue();
        if(companyId != authCompanyId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }

        Company company = companyMapper.companyPatchDtoToCompany(companyPatchDto);
        company.setCompanyId(companyId);
        Company updatedCompany = companyService.updateCompanyProfile(company);

        if (updatedCompany != null) {
            return ResponseEntity.ok("profile updated success"); //프로필 수정이 완료되었을때
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update profile"); //프로필 수정 실패
        }
    }

    @PostMapping("/{company_id}/tag")
    public ResponseEntity createCompanyTag(@PathVariable("company_id") Long companyId,
                                           @RequestBody TagDto.PostId tagIdDto,
                                           Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long authCompanyId = ((Number) principal.get("id")).longValue();
        if(companyId != authCompanyId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        companyTagService.createCompanyTag(companyId,tagIdDto.getTagId());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{company_id}/tag")
    public ResponseEntity getCompanyTags(@PathVariable("company_id") Long companyId){
        List<CompanyTag> companyTags = companyTagService.findCompanyTags(companyId);
        return new ResponseEntity<>(tagMapper.companyTagsToTagResponses(companyTags), HttpStatus.OK);
    }

    @DeleteMapping("/{company_id}/tag/{tag_id}")
    public ResponseEntity deleteUserTag(@PathVariable("company_id") @Positive long companyId,
                                        @PathVariable("tag_id") @Positive long tagId,
                                        Authentication authentication) {

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long checkCompanyId = ((Number) principal.get("id")).longValue();
        if (companyId != checkCompanyId) {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        companyTagService.deleteCompanyTag(companyId,tagId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
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
