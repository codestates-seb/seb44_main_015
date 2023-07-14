package main.resume.service;

import lombok.RequiredArgsConstructor;
import main.resume.entity.Resume;
import main.resume.repository.ResumeRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ResumeService {
    private final ResumeRepository resumeRepository;

    public Resume createResume(Resume resume){
        return resumeRepository.save(resume);
    }

    public Resume updateResume(Resume resume){
        return resumeRepository.save(resume);
    }
    public void deleteResume(Long resumeId){
        resumeRepository.deleteById(resumeId);
    }
}
