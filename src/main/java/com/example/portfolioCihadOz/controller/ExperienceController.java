package com.example.portfolioCihadOz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolioCihadOz.model.Experience;
import com.example.portfolioCihadOz.services.ExperienceService;

@RestController
@RequestMapping("/Experience")
@CrossOrigin
public class ExperienceController{

    @Autowired
    private ExperienceService experienceService;

    @GetMapping("/all")
    public List<Experience> getAllExperiences() {
        return experienceService.getAllExperiences();

    }

    @PostMapping("/add")
    public ResponseEntity<Experience> addExperience(@RequestBody Experience experience) {
        Experience savedExperience = experienceService.saveExperience(experience);
        return ResponseEntity.ok(savedExperience);
    }

    @PostMapping("/addBatch")  // Add this new endpoint for batch adding
    public ResponseEntity<List<Experience>> addExperiencesBatch(@RequestBody List<Experience> experiences) {
        List<Experience> savedExperiences = experienceService.saveExperiencesBatch(experiences);
        return ResponseEntity.ok(savedExperiences);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteExperience(@PathVariable Long id) {
        experienceService.deleteExperience(id);
        return ResponseEntity.noContent().build();
    }

}
