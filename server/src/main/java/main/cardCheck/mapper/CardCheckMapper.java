package main.cardCheck.mapper;

import main.cardCheck.dto.CardCheckDto;
import main.cardCheck.entity.CardCheck;
import main.notice.dto.NoticeDto;
import main.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CardCheckMapper {

    CardCheck cardCheckPostDtoToCardCheck(CardCheckDto.Post cardCheck);

    CardCheck cardCheckPatchDtoToCardCheck(CardCheckDto.Patch cardCheck);
/*
    @Mapping(source = "cardCheck.card.user.tags", target = "userTags")
    @Mapping(source = "cardCheck.card.user.phone", target = "userPhone")
    @Mapping(source = "cardCheck.card.user.email", target = "userEmail")
    @Mapping(source = "cardCheck.card.user.name", target = "userName")
    CardCheckDto.Response cardCheckToCardCheckResponseDto(CardCheck cardCheck);
*/

    List<CardCheckDto.Response> cardChecksToCardCheckResponseDtos(List<CardCheck> cardChecks);
}
