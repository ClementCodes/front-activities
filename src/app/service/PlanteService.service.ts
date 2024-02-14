import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plante } from '../Plante';
import { Observable } from 'rxjs';
import { environment } from '../../environement/environment';


const routes = {
  plante: '/plante'
};


@Injectable({
  providedIn: 'root'
})
export class PlanteServiceService {

  private apiUrl = environment.dev;

  constructor(private http: HttpClient) { }

  sauvegarderPlante(plante: Plante): Observable<Plante> {

    console.log(this.apiUrl + '/plantes')
    return this.http.post(`${this.apiUrl}/plantes`, plante);
  }



}
