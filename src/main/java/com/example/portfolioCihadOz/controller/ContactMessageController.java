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

import com.example.portfolioCihadOz.model.ContactMessage;
import com.example.portfolioCihadOz.services.ContactMessageService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactMessageController {

     @Autowired
    private ContactMessageService contactMessageService;

    @GetMapping("/messages")
    public List<ContactMessage> getAllMessages() {
        return contactMessageService.getAllMessages();
    }

    @PostMapping("/send")
    public ResponseEntity<ContactMessage> sendMessage(@RequestBody ContactMessage message) {
        ContactMessage savedMessage = contactMessageService.saveMessage(message);
        return ResponseEntity.ok(savedMessage);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        contactMessageService.deleteMessage(id);
        return ResponseEntity.noContent().build();
    }  
    
}
