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
export class PlanteService {

  private apiUrl = environment.dev;

  constructor(private http: HttpClient) { }

  createPlante(plante: Plante): Observable<Plante> {

    console.log(this.apiUrl + '/plantes')
    return this.http.post(`${this.apiUrl}/plantes`, plante);
  }

  // READ (GET all plantes)
  getToutesPlantes(): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.apiUrl}/plantes`);
  }

  // READ (GET single plante by id)
  getPlanteParId(id: number): Observable<Plante> {
    return this.http.get<Plante>(`${this.apiUrl}/plantes/${id}`);
  }

  // UPDATE
  updatePlante(plante: Plante): Observable<Plante> {
    return this.http.put<Plante>(`${this.apiUrl}/plantes/${plante.id}`, plante);
  }

  // DELETE
  deletePlante(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/plantes/${id}`);
  }

}
