package main.tag.mapper;

import main.companyTag.entity.CompanyTag;
import main.tag.dto.TagDto;
import main.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TagMapper {
    @Mapping(source = "tag.name", target = "name")
    @Mapping(source = "tag.tagId", target = "tagId")
    TagDto.Response companyTagToTagResponse(CompanyTag companyTag);

    Tag tagPostDtoToTag(TagDto.Post post);

    TagDto.Response tagToTagResponse(Tag tag);

    List<TagDto.Response> companyTagsToTagResponses(List<CompanyTag> companyTags);
    List<TagDto.Response> tagsToTagResponses(List<Tag> tags);
}
