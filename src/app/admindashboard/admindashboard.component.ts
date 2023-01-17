import { Component, OnInit, ViewChild } from '@angular/core';

import {UsersService} from '../users.service';

import {MatPaginator} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})


//var dashboard = new AdmindashboardComponent(new UsersService(new HttpClient(new HttpHandler())), new MatDialog)

export class AdmindashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  patientData:any;
  //x: string[];
  
  constructor(private user: UsersService, public dialog: MatDialog, private _router: Router){}

  ngOnInit(): void {
  this.getPatientData();

  }
  displayedColumns: string[] = ['id', 'full_name', 'email', 'phone','comments','approvestatus','Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 
  getPatientData() {
    this.user.getData().subscribe(x => {
      //console.warn(x);
      this.patientData = new MatTableDataSource(x);
      this.patientData.sort = this.sort;
      this.patientData.paginator = this.paginator;
      //console.log(this.patientData);
    })
  }
  public data:any;
  public x:any;
  delete(id:number){
    JSON.stringify(id) ;
   const dialogRef=  this.dialog.open(DeleteDialogComponent);
   dialogRef.afterClosed().subscribe(result => {
    this.user.update_delete(id).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
    })
  }
  
  
  public ab(postData: number) {
    
  }
}

export interface PeriodicElement {}
const ELEMENT_DATA: PeriodicElement[] = [];


