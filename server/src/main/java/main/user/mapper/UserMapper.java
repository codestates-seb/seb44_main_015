package main.user.mapper;

import main.notice.entity.Notice;
import main.user.dto.*;
import main.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {

    User userPostDtoToUser(UserPostDto userPostDto);
    User userPatchDtoToUser(UserPatchDto userPatchDto);
    @Mapping(source = "card.viewCount", target = "viewCount")
    UserResponseDto userToUserResponseDto(User user);
    List<UserResponseDto> usersToUserResponseDtos(List<User> users);
    @Mapping(target = "tagNames", expression = "java(getTagNames(user))")
    @Mapping(target = "resumeContents", expression = "java(getResumeContents(user))")
    @Mapping(source = "card.cardId", target = "cardId")
    @Mapping(source = "card.viewCount", target = "viewCount")
    UserProfileResponseDto userToUserProfileResponse(User user);

    default List<String> getTagNames(User user){
        return user.getUserTags().stream()
                .map(userTag -> userTag.getTag().getName())
                .collect(Collectors.toList());
    }
    default List<String> getResumeContents(User user){
        return user.getResumes().stream()
                .map(resume -> resume.getContent())
                .collect(Collectors.toList());
    }
}
