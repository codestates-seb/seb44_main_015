package main.resume.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import main.user.entity.User;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long resumeId;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    private User user;
}
