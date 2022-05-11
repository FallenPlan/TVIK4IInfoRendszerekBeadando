import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Patient } from 'src/Models/Patient';
import { catchError, Observable, ObservableInput } from 'rxjs';
import { Connection } from 'src/Models/Connection';

@Injectable({
    providedIn: 'root'
  })

  export class AppService {
      uri = 'http://localhost:4000/app/';
      //searchByNameUri = 'http://localhost:4000/patient-list';
      //appUri = 'http://localhost:4200/patient-list';
    patient = new Patient();
    errorMgmt: (err: any, caught: Observable<Object>) => ObservableInput<any>;

      constructor(private http: HttpClient) {}
      addPatient(pname: any, date_of_birth: any, taj_number: any, medical_history: any, gender: any) {
          const obj = {
              pname: pname,
              date_of_birth: date_of_birth,
              taj_number: taj_number,
              medical_history: medical_history,
              gender: gender
          };
          this.http.post(`${this.uri}patientAdd`, obj).subscribe(res => console.log('Done Patient'));
      }

        // Create P
  createUser(data: any): Observable<any> {
    const url = `${this.uri}/addUser`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

    //search patient by name
    /*searchPatientByName(pname:any):Observable<Patient>{
      let nameVar = pname;
      return this.http.get<Patient>(`${this.searchByNameUri}/${nameVar}`);
    }*/

      //get all partner

  /*getAllPatient():Observable<any>{
    return this.http.get(`${this.uri}`);
  }*/

      addConnection(pname: any, date_of_birth: any, taj_number: any, gender: any) {
          const obj = {
              patient: {
                pname: pname,
                date_of_birth: date_of_birth,
                taj_number: taj_number,
                gender: gender
              }
          };
          this.http.post(`${this.uri}ConnectionAdd`, obj).subscribe(res => console.log('Done Connection'));
      }

      getPatient():Observable<Patient[]>{
          return this.http.get<Patient[]>(`${this.uri}getPatient`);
      }

      getPatientById(id:any):Observable<Patient> {
          return this.http.get<Patient>(`${this.uri}getPatient/${id}`);
      }

      getConnection():Observable<Connection[]> {
          return this.http.get<Connection[]>(`${this.uri}getConnection`);
      }

      editPatient(id:any) {
        console.log(id)
        return this.http.get(`${this.uri}editPatient/${id}`);
      }

      updatePatient(id: any, pname: any, date_of_birth: any, taj_number: any, medical_history: any, gender: any, visited: any) {
        const obj = {
            pname: pname,
            date_of_birth: date_of_birth,
            taj_number: taj_number,
            medical_history: medical_history,
            gender: gender,
            visited: visited
        };
        this.http.post(`${this.uri}patientUpdate/${id}`, obj).subscribe(res => console.log('Done'));
    }

    updateConnectionWithPatient(pname: any, date_of_birth: any, taj_number: any) {
        const obj = {
            patient: {
              pname: pname,
              date_of_birth: date_of_birth,
              taj_number: taj_number
            }
        };
        console.log(taj_number)
        this.http.post(`${this.uri}updateConnectionWithPatient/${taj_number}`, obj).subscribe(res => console.log('Done'));
    }

    deletePatient(id: any) {
        return this
            .http
            .get(`${this.uri}getPatient/delete/${id}`);
    }

    deleteConnection(id: any) {
        return this
            .http
            .get(`${this.uri}getConnection/delete/${id}`);
    }

    setLoggedInUser(patient: any){
        this.patient = patient;
      }
    
      getLoggedInUser(){
        return this.patient;
      }
  }