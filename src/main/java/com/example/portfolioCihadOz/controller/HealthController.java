package com.example.portfolioCihadOz.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HealthController {

    @GetMapping("/health")
    public String healthCheck() {
        return "OK";
    }
}
