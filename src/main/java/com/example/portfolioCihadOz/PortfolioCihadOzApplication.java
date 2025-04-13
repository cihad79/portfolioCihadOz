package com.example.portfolioCihadOz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class PortfolioCihadOzApplication {

    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().load();  // Load the .env file

        SpringApplication.run(PortfolioCihadOzApplication.class, args);
    }

}
