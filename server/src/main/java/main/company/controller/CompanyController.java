package main.company.controller;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import main.company.dto.CompanyDto;
import main.company.dto.CompanyPatchDto;
import main.company.dto.CompanyPostDto;
import main.company.dto.CompanyResponseDto;
import main.company.entity.Company;
import main.company.mapper.CompanyMapper;
import main.company.service.CompanyService;
import main.companyTag.entity.CompanyTag;
import main.companyTag.repository.CompanyTagRepository;
import main.companyTag.service.CompanyTagService;
import main.notice.dto.NoticeDto;
import main.notice.dto.NoticeResponseDto;
import main.notice.entity.Notice;
import main.notice.mapper.NoticeMapper;
import main.notice.service.NoticeService;
import main.tag.dto.TagDto;
import main.tag.dto.TagPostNameDto;
import main.tag.dto.TagResponseDto;
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
    private final CompanyTagService companyTagService;
    private final NoticeService noticeService;
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201")})
    @PostMapping("/signup")
    public ResponseEntity signUpCompany(@Valid @RequestBody CompanyPostDto companyPostDto){
        companyService.createCompany(companyPostDto);

        return new ResponseEntity<>(HttpStatus.CREATED);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = CompanyResponseDto.class))))})
    @GetMapping("/{company_id}")
    public ResponseEntity getCompanyById(@PathVariable("company_id") Long companyId) {
        CompanyResponseDto company = companyService.findCompanyById(companyId);
        return new ResponseEntity<>(company, HttpStatus.OK);
        //r

    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PatchMapping("/profile/{company_id}")
    public ResponseEntity<String> updateCompanyProfile(@PathVariable("company_id") Long companyId,
                                                       @Valid @RequestBody CompanyPatchDto companyPatchDto,
                                                       Authentication authentication) {

        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long authCompanyId = ((Number) principal.get("id")).longValue();
        if(companyId != authCompanyId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }


        companyPatchDto.setCompanyId(companyId);
        Company updatedCompany = companyService.updateCompanyProfile(companyPatchDto);

        if (updatedCompany != null) {
            return ResponseEntity.ok("profile updated success"); //프로필 수정이 완료되었을때
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update profile"); //프로필 수정 실패
        }
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
    @PostMapping("/{company_id}/tag")
    public ResponseEntity createCompanyTag(@PathVariable("company_id") Long companyId,
                                           @RequestBody TagPostNameDto tagPostNameDto,
                                           Authentication authentication){
        Map<String, Object> principal = (Map) authentication.getPrincipal();
        Long authCompanyId = ((Number) principal.get("id")).longValue();
        if(companyId != authCompanyId){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }

        companyTagService.createCompanyTag(tagPostNameDto);

        return new ResponseEntity<>(HttpStatus.CREATED);
        //r
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = TagResponseDto.class))))})
    @GetMapping("/{company_id}/tag")
    public ResponseEntity getCompanyTags(@PathVariable("company_id") Long companyId){
        List<TagResponseDto> companyTags = companyTagService.findCompanyTags(companyId);
        return new ResponseEntity<>(companyTags, HttpStatus.OK);
        //r
    }
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204"),
            @ApiResponse(responseCode = "401"),
            @ApiResponse(responseCode = "403")})
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

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = NoticeResponseDto.class))))})
    @GetMapping("/{company_id}/notice")
    public ResponseEntity getCompanyNotices(@PathVariable("company_id") Long companyId){
        List<NoticeResponseDto> notices = noticeService.findNoticesByCompanyId(companyId);
        return new ResponseEntity(notices, HttpStatus.OK);
        //r
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
