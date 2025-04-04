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

import com.example.portfolioCihadOz.model.School;
import com.example.portfolioCihadOz.services.SchoolServices;

@RestController
@RequestMapping("/School")
@CrossOrigin
public class SchoolController {

    @Autowired
    private SchoolServices schoolServices;

    @GetMapping("/all")
    public List<School> getAllSchools() {
        return schoolServices.getAllSchools();
    }

    @PostMapping("/add")
    public ResponseEntity<School> addSchool(@RequestBody School school) {
        School savedSchool = schoolServices.saveSchool(school);
        return ResponseEntity.ok(savedSchool);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteSchool(@PathVariable Long id) {
        schoolServices.deleteSchool(id);
        return ResponseEntity.noContent().build();
    }

}
