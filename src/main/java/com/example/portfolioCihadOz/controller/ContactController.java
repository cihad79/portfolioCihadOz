package com.example.portfolioCihadOz.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolioCihadOz.services.EmailService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public void sendMessage(@RequestParam String name, @RequestParam String email, @RequestParam String message) {
        // Compose the email content
        String subject = "New Contact Message from " + name;
        String text = "You have received a new message from " + name + " (" + email + "):\n\n" + message;

        // Send email to the admin (change the email address as per your need)
        emailService.sendEmail("your-email@gmail.com", subject, text);
    }

}
