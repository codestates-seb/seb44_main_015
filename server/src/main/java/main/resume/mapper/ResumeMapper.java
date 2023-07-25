package main.resume.mapper;

import main.resume.dto.ResumeDto;
import main.resume.entity.Resume;
import main.user.dto.UserDto;
import main.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ResumeMapper {

    Resume resumePostDtoToResume(ResumeDto.Post resumePostDto);
    Resume resumePatchDtoToResume(ResumeDto.Patch resumePostDto);
}
