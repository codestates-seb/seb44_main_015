package main.cardCheck.mapper;

import main.cardCheck.dto.CardCheckDto;
import main.cardCheck.dto.CardCheckPatchDto;
import main.cardCheck.dto.CardCheckPostDto;
import main.cardCheck.dto.CardCheckResponseDto;
import main.cardCheck.entity.CardCheck;
import main.company.entity.Company;
import main.notice.dto.NoticeDto;
import main.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CardCheckMapper {

    CardCheck cardCheckPostDtoToCardCheck(CardCheckPostDto cardCheck);

    CardCheck cardCheckPatchDtoToCardCheck(CardCheckPatchDto cardCheck);

    @Mapping(source = "cardCheck.card.user.phone", target = "userPhone")
    @Mapping(source = "cardCheck.card.user.email", target = "userEmail")
    @Mapping(source = "cardCheck.card.user.name", target = "userName")
    @Mapping(source = "cardCheck.card.user.userId", target = "userId")
    @Mapping(target = "tagNames", expression = "java(getTagNames(cardCheck))")
    CardCheckResponseDto cardCheckToCardCheckResponseDto(CardCheck cardCheck);

    List<CardCheckResponseDto> cardChecksToCardCheckResponseDtos(List<CardCheck> cardChecks);

    default List<String> getTagNames(CardCheck cardCheck){
        return cardCheck.getCard().getUser().getUserTags().stream()
                .map(userTag -> userTag.getTag().getName())
                .collect(Collectors.toList());
    }
}
