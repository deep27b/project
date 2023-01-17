import { Component, OnInit } from '@angular/core';

import {UsersService} from '../users.service'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private user: UsersService, 
              private router: Router,
               private formBuilder: FormBuilder,
               private _http:HttpClient){
  //  this.user.getUsersData().subscribe(data=>{
  //    console.warn(data)
 //  })
  }
   public loginForm!: FormGroup
   
  ngOnInit(): void { 
  this.loginForm=this.formBuilder.group({
    username : ['',Validators.required],
    password : ['', Validators.required]
  })
    }
  
  proceedLogin()
  { 
    this.user.getUsersData(this.loginForm.value).subscribe(data => {
      console.log(data); 
    
      if(data=="true"){
        this.loginForm.reset();
        this.router.navigate(['/', 'admindashboard']);
       }
       else{
         alert("Not a valid user");
       }
      },err=>{
       alert("something wrong with server");
     })
}

}
