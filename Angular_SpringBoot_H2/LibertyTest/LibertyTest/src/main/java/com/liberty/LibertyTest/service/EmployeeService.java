package com.liberty.LibertyTest.service;

import com.liberty.LibertyTest.dto.EmployeeDTO;
import com.liberty.LibertyTest.entity.Employee;
import com.liberty.LibertyTest.repository.IEmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import java.util.stream.Collectors;
@Service
public class EmployeeService {

    //from application.property file business login from controller to Repository

    @Value("${spring.image.upload-dir}")
    private String uploadDir;

    @Autowired
    private IEmployeeRepository employeeRepository;

    public List<EmployeeDTO> getEmployeeRecord(){
        return employeeRepository.findAll().stream()
                .map(emp->new EmployeeDTO(
                        emp.getEid(),
                        emp.getName(),
                        emp.getSalary(),
                        emp.getEmail(),
                        emp.getPassword(),
                        emp.getProfileImage(),
                        true, emp.getCreateAt())).collect(Collectors.toList());

    }
    //retrive single records
    public Optional<EmployeeDTO> getEmployeeRecordById(Integer eid){
        Employee emp=employeeRepository.findById(eid).orElseThrow(()->new RuntimeException("employee id not found : "));
        return Optional.of(new EmployeeDTO(
                emp.getEid(),
                emp.getName(),
                emp.getSalary(),
                emp.getEmail(),
                emp.getPassword(),
                emp.getProfileImage(),
                true,
                emp.getCreateAt()
        ));


    }
    public void deleteEmployee(Integer eid){
        Employee emp=employeeRepository.findById(eid).orElseThrow(()->new RuntimeException("employee eid not found"));
        employeeRepository.delete(emp);
    }

    @Transactional //if all tx done fine otherwise automatically rollback completed or rollback
    public EmployeeDTO saveEmployee(Employee emp, MultipartFile imgFile)throws IOException {
        if (imgFile != null && !imgFile.isEmpty()) {
            //generate unique file name
            String fileName = System.currentTimeMillis() + "_" + imgFile.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName); //inject upload
            //ensure directry exist
            Files.createDirectories(Paths.get(uploadDir));
            //save the file to server
            imgFile.transferTo(filePath.toFile());
            //store the file name in the db
            emp.setProfileImage(fileName);

        }
        //now save it
        Employee saveEmp = employeeRepository.save(emp);
        //return emp dto
        return new EmployeeDTO(saveEmp.getEid(), saveEmp.getName(), saveEmp.getSalary(),
                saveEmp.getEmail(), saveEmp.getPassword(), saveEmp.getProfileImage(),
                true, saveEmp.getCreateAt());
    }
    @Transactional
    public EmployeeDTO updateEmployee(Integer eid,Employee emp,MultipartFile imgFile)throws IOException{
        Employee exEmp =employeeRepository.findById(eid).orElseThrow(()->new RuntimeException("Unable to update employee"));
        //update user
        exEmp.setName(emp.getName());
        exEmp.setPassword(emp.getPassword());
        exEmp.setSalary(emp.getSalary());
        exEmp.setEmail(emp.getEmail());
        if (imgFile != null && !imgFile.isEmpty()) {
            //generate unique file name
            String fileName = System.currentTimeMillis() + "_" + imgFile.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName); //inject upload
            //ensure directry exist
            Files.createDirectories(Paths.get(uploadDir));
            //save the file to server
            imgFile.transferTo(filePath.toFile());
            //store the file name in the db
            exEmp.setProfileImage(fileName);

        }
        exEmp.setActive(true);
        //save and return updated record
        Employee updatedEmp=employeeRepository.save(exEmp);
        return new EmployeeDTO(updatedEmp.getEid(),updatedEmp.getName(),updatedEmp.getSalary(),
                updatedEmp.getEmail(),updatedEmp.getPassword(),updatedEmp.getProfileImage(),updatedEmp.isActive(),updatedEmp.getCreateAt());




    }

}
