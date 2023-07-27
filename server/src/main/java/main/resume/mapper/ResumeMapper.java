package main.resume.mapper;

import main.resume.dto.ResumeDto;
import main.resume.dto.ResumePatchDto;
import main.resume.dto.ResumePostDto;
import main.resume.dto.ResumeResponseDto;
import main.resume.entity.Resume;
import main.user.dto.UserDto;
import main.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ResumeMapper {

    Resume resumePostDtoToResume(ResumePostDto resumePostDto);
    Resume resumePatchDtoToResume(ResumePatchDto resumePatchDto);
    @Mapping(source = "user.userId", target = "userId")
    ResumeResponseDto resumeToResumeResponseDto(Resume resume);
}
