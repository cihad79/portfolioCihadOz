package com.example.portfolioCihadOz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.portfolioCihadOz.model.Experience;


@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {

}
