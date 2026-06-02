import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { MatCardModule,MatCardContent,MatCardHeader,MatCardTitle,MatCardSubtitle  } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; // 1. Import
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-employee-create',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,MatCardModule,
    MatCardContent,MatCardHeader,MatCardTitle,MatCardSubtitle,MatIconModule,
    MatFormFieldModule, MatInputModule,MatButtonModule],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css',
  providers:[EmployeeService]
})



export class EmployeeCreate {
  employeeForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router,
    private location: Location,
    public envService:EmployeeService
  ){
    this.employeeForm=this.fb.group({
      //eid:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      password:['',Validators.required],
      salary:['',Validators.required],
      profileImage:[null]

      
    });
  }
  onFileSelect(event:any):void {
    const file=event.target.files[0];
    if(file){
      this.employeeForm.patchValue({profileImage:file});
      this.employeeForm.get('profileImage')!.updateValueAndValidity();
    }
  }
createEmployee():void{
  if(this.employeeForm.invalid) return;
  const employeeFormData=new FormData();
  //employeeFormData.append('eid',this.employeeForm.get('eid')!.value);
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
goBack():void{  
  this.location.back();
  //window.location.reload();
}

}
