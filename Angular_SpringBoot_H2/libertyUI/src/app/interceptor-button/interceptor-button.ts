import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interceptor-button',
  imports: [MatIconModule ,MatButtonModule,CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './interceptor-button.html',
  styleUrl: './interceptor-button.css',
})
export class InterceptorButton {
  employee:Employee[]=[]; //create object of Employee
  constructor(private employeeService:EmployeeService,private router:Router,public envService:EmployeeService){ //DI
    
  }
  
  readItem(){    
     this.employeeService.getEmployee().subscribe((data:Employee[])=>{ //
        this.employee=data;
         //console.log("Read items:"+this.employee);
     });
    
    
  }
  loginForm(){
    console.log("Login Form");
  }
 
  
 
}
