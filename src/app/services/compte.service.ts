import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Compte} from "../models/compte";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  API_URL: string = `http://localhost:8099/compte-service`;
  constructor(private http:HttpClient){}
  getAll() : Observable<any> {
    return this.http.get<any>(`${this.API_URL}/comptes`);
  }
  create(compte: Compte) {
    console.log(compte);
    return this.http.post<Compte>(`${this.API_URL}/comptes`,compte,httpOptions);
  }
}
