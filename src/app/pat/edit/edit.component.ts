import { Component, Input, OnInit } from '@angular/core';

import {UsersService} from '../../users.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  updateForm:FormGroup;
  constructor(private user: UsersService,private _http:HttpClient,
    private formBuilder: FormBuilder,private router: ActivatedRoute) { }
  
    id:any;
    data:any;
      ngOnInit(): void {
      this.id = this.router.snapshot.paramMap.get('id');
      this.getPatientData(); 
      
    this.updateForm=this.formBuilder.group({
      pid:this.id,
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
    })
    
    
  }

  getPatientData() {
    this.user.geteditPatient(this.id).subscribe(x => {     
      console.log(x);
      this.data=x;
      this.updateForm.setValue({
        firstName: this.data.first_name,
        pid:this.id,
        title:this.data.title,
        lastName:this.data.last_name,
        mobile:this.data.mobile,
        email:this.data.email,
        address:this.data.address,
        city: this.data.city,
        state:this.data.state,
        postcode:this.data.postcode,
        occupation:this.data.occupation,
        heard:this.data.heard,
        card:'',
      company:'',
      reference:'',
       
      })
    })
  }

  update(){
    console.log(this.updateForm.value);
    this.user.update_patient(this.updateForm.value).subscribe(result=>{
      console.warn(result);
    })
    }

    fvalues(){
      
    }

  }

  

 
