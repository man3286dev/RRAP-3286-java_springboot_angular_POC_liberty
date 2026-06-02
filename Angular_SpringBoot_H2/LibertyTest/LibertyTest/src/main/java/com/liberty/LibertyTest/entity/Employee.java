package com.liberty.LibertyTest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity //table
@Table(name="EmployeeEntity")
@Data //getter and setter
@NoArgsConstructor // no arg constructor
@AllArgsConstructor //const with argument
public class Employee {
    @Id  //pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eid;//pk
    private String name;
    private double salary;
    @Column(unique = true)
    private String email;

    private String password;
    private String profileImage;
    private boolean active;
    private LocalDateTime createAt=LocalDateTime.now();

}
