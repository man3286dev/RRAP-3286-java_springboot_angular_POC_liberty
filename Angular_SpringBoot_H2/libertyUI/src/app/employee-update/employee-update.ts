import { Component, HostListener, inject, Injectable } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee-update',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './employee-update.html',
  styleUrl: './employee-update.css',
  providers:[EmployeeService]
})
@Injectable({
  providedIn: 'root' // Makes the service a singleton available app-wide
})
export class EmployeeUpdate {
  employee:Employee[]=[]; 
   employeeForm: FormGroup;
   employeeId!:number;
   constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router,
    private route:ActivatedRoute,
    private location: Location,
    public envService:EmployeeService
   ){
    this.employeeForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      password:['',Validators.required],
      salary:['',Validators.required],
      profileImage:[null]
    });        
   }

   ngOnInit():void{
    this.employeeId=Number(this.route.snapshot.paramMap.get('eid'));
    if(this.employeeId){
      this.employeeService.getEmployeeById(this.employeeId).subscribe(employee =>{
        this.employeeForm.patchValue({
          name:employee.name,
          email:employee.email,
          password:employee.password,
          salary:employee.salary
        });
      });
    }
   }
   onFileSelect(event:any):void {
    const file=event.target.files[0];
    if(file){
      this.employeeForm.patchValue({ profileImage:file });
      this.employeeForm.get('profileImage')!.updateValueAndValidity();
    }
  }

  
  updateEmployee():void{
    if(this.employeeForm.invalid) return;

    const employeeFormData=new FormData();
    employeeFormData.append('name',this.employeeForm.get('name')!.value);
    employeeFormData.append('email',this.employeeForm.get('email')!.value);
    employeeFormData.append('password',this.employeeForm.get('password')!.value);
    employeeFormData.append('salary',this.employeeForm.get('salary')!.value);
    const imageFile = this.employeeForm.get('profileImage')!.value;
  if(imageFile){
    employeeFormData.append('profileImage',imageFile,imageFile.name);
  }
  this.employeeService.createEmployee(employeeFormData).subscribe(()=>{
    this.router.navigate(['/employee'])
  });

}
  
goBack(){ 
 
  
   //this.router.navigate(['/employee']);
   this.employeeService.getEmployee().subscribe((data:Employee[])=>{ //
      this.employee=data;
   });
   this.router.navigate(['/employee']);
   
   //window.location.reload();
   
    
   

} 
  

}

//updateEmployee
