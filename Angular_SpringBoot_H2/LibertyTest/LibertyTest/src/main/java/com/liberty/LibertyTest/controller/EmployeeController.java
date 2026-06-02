package com.liberty.LibertyTest.controller;

import com.liberty.LibertyTest.dto.EmployeeDTO;
import com.liberty.LibertyTest.entity.Employee;
import com.liberty.LibertyTest.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/emp") //endpoint
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getEmployeeRecord(){
        List<EmployeeDTO> empList=employeeService.getEmployeeRecord();
        return ResponseEntity.ok(empList);


    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{eid}")
    public ResponseEntity<?> getEmployeeRecordById(@PathVariable Integer eid){
        try{
            Optional<?> empId=employeeService.getEmployeeRecordById(eid);
            return ResponseEntity.ok(empId);
        } catch (RuntimeException e) {
            Map<String,Object> error=new HashMap<>();
            error.put("status",404);
            error.put("error","Employee not found");
            error.put("message",e.getMessage());
            error.put("timestamp", LocalDateTime.now());
            return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
        }

    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{eid}")
    public ResponseEntity<?> deleteEmpById(@PathVariable("eid") Integer eid){ //? opttional
        try{
            employeeService.deleteEmployee(eid);
            return ResponseEntity.noContent().build();
        }catch (Exception e){
            Map<String,Object> error=new HashMap<>();
            error.put("status",404);
            error.put("error","Employee not found");
            error.put("message",e.getMessage());
            error.put("timestamp", LocalDateTime.now());
            return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);

        }

    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/create")
    public ResponseEntity<EmployeeDTO> createEmployee(

            @RequestParam("name") String name,
            @RequestParam("salary") Double salary,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam(value="profileImage", required = false) MultipartFile profileImage) throws IOException{

            Employee emp=new Employee();
            emp.setName(name);
            emp.setSalary(salary);
            emp.setEmail(email);
            emp.setPassword(password);
            //emp.setProfileImage();
            EmployeeDTO empDTO = employeeService.saveEmployee(emp,profileImage);
            return ResponseEntity.ok(empDTO);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/update/{eid}")
    public ResponseEntity<EmployeeDTO> updateEmp(
            @PathVariable Integer eid,
            @RequestParam("name") String name,
            @RequestParam Double salary,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam(value="profileImage", required = false) MultipartFile profileImage) throws Exception{
        //create emp entiry for update
            Employee emp=new Employee();
            emp.setName(name);
            emp.setSalary(salary);
            emp.setEmail(email);
            emp.setPassword(password);
           // emp.setProfileImage();
            //update emp with img
        EmployeeDTO updateEmpdto=employeeService.updateEmployee(eid,emp,profileImage);
        return ResponseEntity.ok(updateEmpdto);

    }

}
