package main.response;

import lombok.Getter;
import lombok.NonNull;
import org.springframework.data.domain.Page;

@Getter
public class CustomResponseDto {
    @NonNull
    private String name;
    @NonNull
    private  String info;
    private PageInfo pageInfo;

    public CustomResponseDto(String name, String info, Page page) {
        this.name = name;
        this.info = info;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}
