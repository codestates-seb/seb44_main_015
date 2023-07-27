package main.tag.mapper;

import main.companyTag.entity.CompanyTag;
import main.tag.dto.TagDto;
import main.tag.dto.TagPostDto;
import main.tag.dto.TagResponseDto;
import main.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TagMapper {
    @Mapping(source = "tag.name", target = "name")
    @Mapping(source = "tag.tagId", target = "tagId")
    TagResponseDto companyTagToTagResponse(CompanyTag companyTag);

    Tag tagPostDtoToTag(TagPostDto post);

    TagResponseDto tagToTagResponse(Tag tag);

    List<TagResponseDto> companyTagsToTagResponses(List<CompanyTag> companyTags);
    List<TagResponseDto> tagsToTagResponses(List<Tag> tags);
}
