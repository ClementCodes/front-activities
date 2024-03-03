import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environement/environment';
import { Plante } from '../interface/Plante';
import { AxiosService } from './Axios/axiosService';


const routes = {
  plante: '/plante'
};


@Injectable({
  providedIn: 'root'
})
export class PlanteService {

  private apiUrl = environment.dev;

  constructor(private http: HttpClient, private axiosService: AxiosService) { }

  createPlante(plante: Plante): Observable<Plante> {

    console.log(this.apiUrl + '/admin/plantes', plante)
    return this.http.post(`${this.apiUrl}/plantes`, plante);
  }

  // READ (GET all plantes)
  getToutesPlantes(): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.apiUrl}/admin/plantes`);
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

  getAllPlante(): void {
    this.axiosService.request(
      "GET",
      "/plantes",
      {

      }).then(
        response => {
          this.axiosService.setAuthToken(response.data.token);
          console.log(response)
        }).catch(
          error => {
            this.axiosService.setAuthToken(null);

          }
        );
  }



}

