package com.liberty.LibertyTest.repository;

import com.liberty.LibertyTest.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee,Integer> {
    Employee findByEmail(String email);
}
