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

import com.example.portfolioCihadOz.model.Projects;
import com.example.portfolioCihadOz.services.ProjectsService;

@RestController
@RequestMapping("/project")
@CrossOrigin
public class ProjectsController {

    @Autowired
    private ProjectsService projectsService;

    @GetMapping("/all")
    public List<Projects> getAllProjects() {
        return projectsService.getAllProjekts();
    }

    @PostMapping("/add")
    public ResponseEntity<Projects> addProject(@RequestBody Projects project) {
        Projects savedProject = projectsService.saveProjekts(project);
        return ResponseEntity.ok(savedProject);
    }

    @PostMapping("/addBatch")  // Add this method for batch adding
    public ResponseEntity<List<Projects>> addProjectsBatch(@RequestBody List<Projects> projects) {
        List<Projects> savedProjects = projectsService.saveProjectsBatch(projects);
        return ResponseEntity.ok(savedProjects);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectsService.deleteProjekts(id);
        return ResponseEntity.noContent().build();
    }
}
