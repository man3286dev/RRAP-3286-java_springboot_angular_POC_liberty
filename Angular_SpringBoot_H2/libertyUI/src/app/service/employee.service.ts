import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../model/employee.model";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn:'root' //injectable means(service class) available in all other component
                      // standalone service, singalton you can use this service class across app.
})
export class EmployeeService{
    private  apiUrl=environment.apiUrl;
    appEnvTitle=signal<any>(environment.displayName);
    private http = inject(HttpClient);
//env put api,jwt token interceptor
    //get all employee

    

    public getEmployee():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.apiUrl);
    }

     //get single employeeid
    public getEmployeeById(eid:number):Observable<Employee>{
        return this.http.get<Employee>(`${this.apiUrl}/${eid}`);
    }

    //create new employee
    public createEmployee(employee: FormData):Observable<any>{
        return this.http.post(this.apiUrl+'/create',employee);
         
    }

   
    
    //update employee
    updateEmployee(eid:number,employee:FormData):Observable<any>{
        return this.http.put(`${this.apiUrl}/update/${eid}`,employee);
        
        

    }
    //delete employee
    deleteEmployee(eid:number): Observable<any>{
        return this.http.delete(`${this.apiUrl}/delete/${eid}`);
        console.log("eid is :"+eid);        

    }

}