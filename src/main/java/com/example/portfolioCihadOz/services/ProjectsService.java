package com.example.portfolioCihadOz.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolioCihadOz.model.Projects;
import com.example.portfolioCihadOz.repositories.ProjectsRepository;

@Service
public class ProjectsService {

    @Autowired
    private  ProjectsRepository ProjectsRepository;

    public List<Projects> getAllProjekts() {
        return ProjectsRepository.findAll();
    }

    public Projects saveProjekts(Projects projekts) {
        return ProjectsRepository.save(projekts);
    }
 
    public void deleteProjekts(Long id) {
        ProjectsRepository.deleteById(id);
    }

}