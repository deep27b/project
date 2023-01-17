import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {UsersService} from '../../users.service'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 registerForm:FormGroup;

 kk:any;

  constructor(private user: UsersService, 
    private router: Router,
     private formBuilder: FormBuilder,
     private _http:HttpClient){  }
    
     

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      title:'',
      firstName: '',
      lastName: '',
      mobile:'',
      email:'',
      address:'',
      city: '',
      state:'',
      postcode:'',
      occupation:'',
      heard:'',
      card:'',
      company:'',
      reference:'',
    
    //  insurance: '',
     
    })
  }

 
  public register()
  {
    this.user.register_patient(this.registerForm.value).subscribe(data => {
      console.log(data); })
    console.warn(this.registerForm.value);
  }

 insurance_show =false;
  

}
