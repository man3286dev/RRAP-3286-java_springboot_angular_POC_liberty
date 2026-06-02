import { provideRouter, Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import bootstrap from '../main.server';
import { bootstrapApplication } from '@angular/platform-browser';
import { EmployeeUpdate } from './employee-update/employee-update';
import { EmployeeCreate } from './employee-create/employee-create';
import { App } from './app';
import { InterceptorButton } from './interceptor-button/interceptor-button';
import { Login } from './login/login';
import { Test } from './test/test';

export const routes: Routes = [
    {path:'', redirectTo:'employee', pathMatch:'full'},
    {path:'interceptor',component:InterceptorButton},
    {path:'employee', component:EmployeeList},
    {path:'employee/create', component:EmployeeCreate},
    {path:'employee/edit/:eid', component:EmployeeUpdate},
    {path:'login',component:Login},
    {path:'test',component:Test}


];
export const AppRoutes = provideRouter(routes);
bootstrapApplication(App,{
    providers:[AppRoutes]
});
