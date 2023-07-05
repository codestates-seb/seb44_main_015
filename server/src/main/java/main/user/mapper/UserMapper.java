package main.user.mapper;

import main.user.dto.UserDto;
import main.user.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    UserEntity userPostDtoToUser(UserDto.Post userPostDto);
    UserEntity userPatchDtoToUser(UserDto.Patch userPatchDto);
    UserDto.Response userToUserResponseDto(UserEntity user);
}
