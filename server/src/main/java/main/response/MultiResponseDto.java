package main.response;

import com.codestates.question.dto.QuestionDto;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private PageInfo pageInfo;
    private List<T> data;

    public MultiResponseDto(List<T> data, Page page) {
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());

    }
}
