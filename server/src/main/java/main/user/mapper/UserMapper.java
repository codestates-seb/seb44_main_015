package main.user.mapper;

import main.user.dto.UserDto;
import main.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    User userPostDtoToUser(UserDto.Post userPostDto);
    User userPatchDtoToUser(UserDto.Patch userPatchDto);
    UserDto.Response userToUserResponseDto(User user);
    List<UserDto.Response> usersToUserResponseDtos(List<User> users);
}
