package com.example.portfolioCihadOz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.portfolioCihadOz.model.School;

@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {

}
