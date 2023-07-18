package main.card.mapper;

import main.card.dto.CardDto;
import main.card.entity.Card;
import main.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CardMapper {

    @Mapping(target = "tagNames", expression = "java(getTagNames(card))")
    @Mapping(source = "user.name", target = "name")
    @Mapping(source = "user.phone", target = "phone")
    @Mapping(source = "user.email", target = "email")
    CardDto.Response cardToCardResponseDto(Card card);

    List<CardDto.Response> cardsToCardResponsesDto(List<Card> cards);

    default List<String> getTagNames(Card card){
        return card.getUser().getUserTags().stream()
                .map(userTag -> userTag.getTag().getName())
                .collect(Collectors.toList());
    }
}
