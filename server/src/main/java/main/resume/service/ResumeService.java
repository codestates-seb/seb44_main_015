package main.resume.service;

import lombok.RequiredArgsConstructor;
import main.resume.entity.Resume;
import main.resume.repository.ResumeRepository;
import main.user.entity.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
@RequiredArgsConstructor
public class ResumeService {
    private final ResumeRepository resumeRepository;

    public Resume createResume(Resume resume){
        return resumeRepository.save(resume);
    }

    public Resume createResumeByString(String content, User user){
        Resume createResume = new Resume();
        createResume.setUser(user);
        createResume.setContent(content);
        return resumeRepository.save(createResume);
    }

    public Resume updateResume(Resume resume){
        return resumeRepository.save(resume);
    }
    public void deleteResume(Long resumeId){
        resumeRepository.deleteById(resumeId);
    }
}
