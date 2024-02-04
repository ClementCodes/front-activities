import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plante } from '../Plante';
import { Observable } from 'rxjs';


const routes = {
  plante: '/plante'
};


@Injectable({
  providedIn: 'root'
})
export class PlanteServiceService {

  private apiUrl = 'https://plantes';

  constructor(private http: HttpClient) { }

  sauvegarderPlante(plante: Plante): Observable<any> {
    return this.http.post(this.apiUrl, plante);
  }



}
