package main.resume.service;

import lombok.RequiredArgsConstructor;
import main.resume.dto.ResumePatchDto;
import main.resume.dto.ResumePostDto;
import main.resume.dto.ResumeResponseDto;
import main.resume.entity.Resume;
import main.resume.mapper.ResumeMapper;
import main.resume.repository.ResumeRepository;
import main.user.entity.User;
import main.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
@RequiredArgsConstructor
public class ResumeService {
    private final ResumeRepository resumeRepository;
    private final ResumeMapper resumeMapper;
    private final UserRepository userRepository;

    public ResumeResponseDto createResume(ResumePostDto resumePostDto){
        Resume resume = resumeMapper.resumePostDtoToResume(resumePostDto);
        resume.setUser(userRepository.findByUserId(resumePostDto.getUserId()).orElseThrow());
        Resume savedResume = resumeRepository.save(resume);
        return resumeMapper.resumeToResumeResponseDto(savedResume);
    }

    public Resume createResumeByString(String content, User user){
        Resume createResume = new Resume();
        createResume.setUser(user);
        createResume.setContent(content);
        return resumeRepository.save(createResume);
    }

    public ResumeResponseDto updateResume(ResumePatchDto resumePatchDto){
        Resume resume = resumeMapper.resumePatchDtoToResume(resumePatchDto);
        resume.setUser(userRepository.findByUserId(resumePatchDto.getUserId()).orElseThrow());
        resumeRepository.save(resume);
        return resumeMapper.resumeToResumeResponseDto(resume);
    }
    public void deleteResume(Long resumeId){
        resumeRepository.deleteById(resumeId);
    }
}
