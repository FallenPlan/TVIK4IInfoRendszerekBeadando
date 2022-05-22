import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Connection } from 'src/Models/Connection';
import { Patient } from 'src/Models/Patient';
import { AppService } from '../app.service';

@Component({
  selector: 'app-patient-get',
  templateUrl: './patient-get.component.html',
  styleUrls: ['./patient-get.component.scss']
})

export class PatientGetComponent implements OnInit {

  patients: Patient[];
  ConnectionForCheck: Connection[];
  searchText: string;
  ConnectionID: String;
  CustomerIDNum: String;
  filteredItems: any;
  items: any;
  service: any;
  readedData: any;

  constructor(private as: AppService, private router: Router) { }

  ngOnInit(): void {
    this.as.getPatient().subscribe((data: Patient[]) => {
      this.patients = data;
    });
    this.as.getConnection().subscribe((data: Connection[]) => {
      this.ConnectionForCheck = data;
    });
    //this.getAllPatients();
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

  assignCopy(){
    this.filteredItems = Object.assign([], this.items);
 }
 filterItem(value: string){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.items).filter(
      (       item: { name: string; }) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }

}
