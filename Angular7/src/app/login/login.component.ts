import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service : UserService,private router: Router,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
    
  }
  resetForm(form?: NgForm){
    if(form ! = null)
    form.resetForm();
  this.service.formData = {
  Id :null,
  Username :'',
  Password :''
  }
  

}
onLogin(form : NgForm){
  console.log('I am here');
  this.service.getUser(form.value.Username, form.value.Password).subscribe(res =>{ 
    console.log(res); 
    if(res){
      var val =res as [];

      if(val.length>0){
       this.toastr.success('Login Succeeded');
       this.router.navigate(['/employees']);
      }
      else{
        this.toastr.success('Login Failed');
        this.resetForm(form); 
      }
    }
    else{
      this.toastr.success('Login Failed');
      this.resetForm(form);        
    }
  
});
} 

}
