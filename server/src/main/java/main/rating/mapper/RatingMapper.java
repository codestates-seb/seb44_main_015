package main.rating.mapper;

import main.rating.dto.RatingDto;
import main.rating.dto.RatingPostDto;
import main.rating.dto.RatingResponseDto;
import main.rating.entity.Rating;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RatingMapper {

    Rating ratingPostDtoToRating(RatingPostDto post);

    @Mapping(source = "rating.notice.company.companyId", target = "companyId")
    @Mapping(source = "rating.notice.noticeId", target = "noticeId")
    @Mapping(source = "rating.user.userId", target = "userId")
    RatingResponseDto ratingToRatingResponseDto(Rating rating);

    List<RatingResponseDto> ratingsToRatingResponseDtos(List<Rating> ratings);
}
