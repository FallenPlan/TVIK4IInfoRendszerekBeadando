import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Connection } from 'src/Models/Connection';
import { Patient } from 'src/Models/Patient';
import { AppService } from '../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vizsgalat-patient',
  templateUrl: './vizsgalat-patient.component.html',
  styleUrls: ['./vizsgalat-patient.component.scss']
})
export class VizsgalatPatientComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  
    patients: Patient[];
    ConnectionForCheck: Connection[]
    ConnectionID: String;
    CustomerIDNum: String;
    filteredItems: any;
    items: any;
    service: any;
    readedData: any;
  
    constructor(private as: AppService, private router: Router) { }
  
    ngOnInit(): void {
      this.as.getConnection().subscribe((data: Connection[]) => {
        this.ConnectionForCheck = data;
      });
      console.log(this.visit.get('visitSelect')?.value);
    }
    visitSelect = new FormControl('');

    visit = new FormGroup({
      visitSelect: this.visitSelect,
    });

    getPatient2(){
      this.as.getPatient2(this.visit.get('visitSelect')?.value).subscribe((data:any) => {
        console.log(data);
        
        this.patients = data;
        console.log(this.patients);
        
      });
    }
  
    deletePatient(id:any) {
      this.as.deletePatient(id).subscribe(res => {
        this.as.deleteConnection(this.ConnectionID).subscribe(res => {
        });
        console.log('Deleted');
        this.router.navigate(['patient-list']);
        window.location.reload();
      });
    }
  
  }
