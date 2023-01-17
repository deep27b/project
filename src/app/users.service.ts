import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsersService {


  constructor(private http: HttpClient) { }

  public getData(): Observable<[]>
    {
        let url= environment.appointmentListEndPoint;
       // console.log(url);

        return this.http.get<[]>(url);
    }



   
    getUsersData(postData:any)
    {
      let url=environment.loginendpoints;
        return this.http.post(url,postData,{responseType: 'text'});
    }
    update_delete(id: any)
    {
      console.log(id);
      return this.http.get(environment.emailupdateendpoints+id);
    }
    register_patient(postData:any){
      console.log(environment.addpatientendpoints);
      return this.http.post(environment.addpatientendpoints, postData,{responseType: 'text'});

    }
    update_patient(patient:any)
    {   return this.http.put<any>(environment.updatepatientendpoints, patient); }
   
    public getRegisteredPatient():Observable<[]>
    {
        let url= environment.registeredpatientendpoints;
        return this.http.get<[]>(url);
    }
    public geteditPatient(id:any)
    {
        let url= environment.geteditPatientendpoints+id+"/getonePatient";
        return this.http.get(url);
    }
   
  
}
