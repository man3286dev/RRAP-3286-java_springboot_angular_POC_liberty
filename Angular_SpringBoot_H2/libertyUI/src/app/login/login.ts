
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment';
import { EmployeeService } from '../service/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   http = inject(HttpClient);
   loginForm: FormGroup;
   hidePassword = true;
   appEnvTitle=signal<any>(environment.displayName);
   private  apiUrl=environment.apiUrl;
   

 constructor(private fb: FormBuilder,public envService:EmployeeService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

   
  }
//+'/create'
  onSubmit(): void {
    if (this.loginForm.valid) {      
        console.log('Credentials payload output data:', this.loginForm.value);
        /*localStorage.setItem("angularTokenInterceptor","abfghc567898hjjls344567fhsdfkksxmy_Manoj") ;
        this.http.get(this.apiUrl).subscribe((res)=>{
          //this.apiUrl+'/errorurl'
        console.log('response '+res);
      });*/
    
      // Process database validation here
    }
  }
  }
