import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditComponent } from './pat/edit/edit.component';
import { RegisterComponent} from './pat/register/register.component';
import { RegisteredpatientComponent } from './pat/registeredpatient/registeredpatient.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'pat/edit', component: EditComponent},
  { path: 'pat/register', component: RegisterComponent},
  { path: 'pat/registeredpatient', component: RegisteredpatientComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
