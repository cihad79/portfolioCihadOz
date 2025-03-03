package com.example.portfolioCihadOz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.portfolioCihadOz.model.Projects;

@Repository
public interface ProjectsRepository extends JpaRepository<Projects, Long> {

}
