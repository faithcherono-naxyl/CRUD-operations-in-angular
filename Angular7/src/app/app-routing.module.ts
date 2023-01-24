import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from "@angular/router";
import { EmployeesComponent } from "./employees/employees.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  
  
  {
    path: 'signup', component: SignupComponent
  },

  {
      path: 'employees', component: EmployeesComponent
  }
  ,
  
  {
      path: '', component: LoginComponent
  }
  ,
  
  {
      path: 'login', component: LoginComponent
  }
  
  
  
  ];
  
  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
export class AppRoutingModule { }





