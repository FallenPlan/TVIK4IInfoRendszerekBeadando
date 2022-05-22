import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientGetComponent } from './patient-get/patient-get.component';
import { VizsgalatPatientComponent } from './vizsgalat-patient/vizsgalat-patient.component';

const routes: Routes = [
  {path: 'patient-list', component: PatientGetComponent},
  {path: 'patient-add', component: PatientAddComponent},
  {path: 'patient-edit/:id', component: PatientEditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'visit-list', component: VizsgalatPatientComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: '', component: AppComponent},
  {path: '404', component: NotFoundComponent},
 {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
