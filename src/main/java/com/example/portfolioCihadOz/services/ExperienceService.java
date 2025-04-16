package com.example.portfolioCihadOz.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolioCihadOz.model.Experience;
import com.example.portfolioCihadOz.repositories.ExperienceRepository;

@Service
public class ExperienceService {

    @Autowired
    private ExperienceRepository experienceRepository;

    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    public Experience saveExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    public List<Experience> saveExperiencesBatch(List<Experience> experiences) {  // Add this method to handle batch save
        return experienceRepository.saveAll(experiences);
    }

    public void deleteExperience(Long id) {
        experienceRepository.deleteById(id);
    }

}
