package main.rating.mapper;

import main.rating.dto.RatingDto;
import main.rating.entity.Rating;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RatingMapper {

    Rating ratingPostDtoToRating(RatingDto.Post post);

    @Mapping(source = "rating.notice.company.companyId", target = "companyId")
    @Mapping(source = "rating.notice.noticeId", target = "noticeId")
    @Mapping(source = "rating.user.userId", target = "userId")
    RatingDto.Response ratingToRatingResponseDto(Rating rating);

    List<RatingDto.Response> ratingsToRatingResponseDtos(List<Rating> ratings);
}
