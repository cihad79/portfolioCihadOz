package com.example.portfolioCihadOz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class PortfolioCihadOzApplication {

    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().load();  // Load the .env file

        System.out.println("DB_URL: " + dotenv.get("DB_URL"));
        System.out.println("DB_USERNAME: " + dotenv.get("DB_USERNAME"));
        System.out.println("DB_PASSWORD: " + dotenv.get("DB_PASSWORD"));

        SpringApplication.run(PortfolioCihadOzApplication.class, args);
    }

}
