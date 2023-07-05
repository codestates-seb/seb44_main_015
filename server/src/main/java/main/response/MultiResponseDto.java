package main.response;

import com.codestates.question.dto.QuestionDto;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto {
    private PageInfo pageInfo;

    public MultiResponseDto(List<QuestionDto.GETAllResponse> questionResponseDtos, Page page) {
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());

    }
}
