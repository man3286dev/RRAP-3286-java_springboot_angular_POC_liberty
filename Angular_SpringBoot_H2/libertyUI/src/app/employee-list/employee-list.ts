import { Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Employee } from '../model/employee.model';

import { EmployeeService } from '../service/employee.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table'; 



@Component({
  selector: 'app-employee-list',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,MatGridListModule,MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule  ],
  providers:[EmployeeService],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit { 


  employee:Employee[]=[]; //create object of Employee
  constructor(private employeeService:EmployeeService,private router:Router,public envService:EmployeeService){ //DI
    
  }
  ngOnInit(): void {
    this.getEmployee();
  }
  
  //list employee
  getEmployee(){
     //localStorage.setItem("angularTokenInterceptor","abc567898hjjlsfhsdfkksxmy") ;
    this.employeeService.getEmployee().subscribe((data:Employee[])=>{ //
    this.employee=data;//store the fetch employee  
        
     
    });
  }
  //delete employee
  deleteEmployee(eid:number){
    this.employeeService.deleteEmployee(eid).subscribe(()=>{
      this.getEmployee();
    });
  }
  //edit employee
  editEmployee(eid:any){
    this.router.navigate([`/employee/edit/${eid}`]); //navigate to update component
  }

  
  count=0;
  counter(action:string){
    if(action=='minus')
      this.count >0 && this.count --;
      else
        this.count++;
    }  
    btndisable=true;
    toggle(){
      this.btndisable =!this.btndisable;
    }//signal
    dataSignal=signal("100");
  data:WritableSignal<string>=signal<string>("manoj");
  users:WritableSignal<string[]>=signal(['anil','manoj','kumar']);
  speed:Signal<number>=computed<number>(()=>90)
  
    handleEvent(){
     
      this.users.update((item)=>[...item,'BRUCE']);
      this.data.set("KUMAR");
       console.log("hai"+this.users);

    }
    counter1:WritableSignal<number>=signal<number>(0);
    increment(){
      
        this.counter1.update((val)=>val+1);
      
      
    }
    decrement(){
      if(this.counter1() >0){
      this.counter1.update((val)=>val-1);
      }
    }
    reset(){
      this.counter1.set(0);
    }
    name:WritableSignal<string | number>=signal('hello');
    setValue(name:string|number){
      this.name.set(name);

    }
    resetVal(){
      this.name.set('');
    }
    
    


}
