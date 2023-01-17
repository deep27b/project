import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {UsersService} from '../../users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registeredpatient',
  templateUrl: './registeredpatient.component.html',
  styleUrls: ['./registeredpatient.component.scss']  })


export class RegisteredpatientComponent implements OnInit {
 
  constructor(private user: UsersService, private router: Router) { }
 
  patientlist:any;

  ngOnInit(): void {
    this.getPatientData();  }

  displayedColumns: string[] = ['pid','title', 'first_name', 'email', 'phone','dob','address','Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  getPatientData() {
    this.user.getRegisteredPatient().subscribe(x => {
     this.patientlist = new MatTableDataSource(x);
    })
  }
  edit(id:any){
   this.router.navigate(['pat/edit',{id:id}]);
  }
}

export interface PeriodicElement {}
const ELEMENT_DATA: PeriodicElement[] = [];


