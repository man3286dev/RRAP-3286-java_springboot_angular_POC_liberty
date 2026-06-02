package com.liberty.LibertyTest.dto;

//import jakarta.persistence.Column;
import lombok.*;

import java.time.LocalDateTime;

@Data //getter and setter
//@NoArgsConstructor // no arg constructor
//@AllArgsConstructor //const with argument
//@RequiredArgsConstructor

public class EmployeeDTO {
    private Integer eid;//pk
    private String name;
    private double salary;
    private String email;
    private String password;
    private String profileImage;
    private boolean active;
    private LocalDateTime createAt=LocalDateTime.now();



    public EmployeeDTO(Integer eid, String name, double salary, String email, String password, String profileImage, boolean active, LocalDateTime createAt) {
        this.eid = eid;
        this.name = name;
        this.salary = salary;
        this.email = email;
        this.password = password;
        this.profileImage = profileImage;
        this.active = active;
        this.createAt = createAt;
    }




    @Override
    public String toString() {

        return "EmployeeDTO{" +
                "eid=" + eid +
                ", name='" + name + '\'' +
                ", salary=" + salary +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", profileImage='" + profileImage + '\'' +
                ", active=" + active +
                ", createAt=" + createAt +
                '}';
    }
}
