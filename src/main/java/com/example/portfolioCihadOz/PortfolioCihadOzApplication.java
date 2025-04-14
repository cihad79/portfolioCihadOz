package com.example.portfolioCihadOz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class PortfolioCihadOzApplication {

    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.load();
        System.out.println("JAWSDB_URL: " + dotenv.get("JAWSDB_URL"));
        System.out.println("JAWSDB_USERNAME: " + dotenv.get("JAWSDB_USERNAME"));
        System.out.println("JAWSDB_PASSWORD: " + dotenv.get("JAWSDB_PASSWORD"));
        SpringApplication.run(PortfolioCihadOzApplication.class, args);
    }

}
