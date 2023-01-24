import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

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
  onSubmit(form : NgForm){
    if(form.value.Id ==null)
    this.insertRecord(form);
else
this.resetForm(form);
  } 
  insertRecord(form : NgForm){
    debugger;
    this.service.postUser(form.value).subscribe(res =>{ 
      this.toastr.success('Signup Successfully');
      this.resetForm(form);
      this.router.navigate(['/login']);
    
  });
}

}
  