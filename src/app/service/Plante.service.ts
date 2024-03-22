import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environement/environment';
import { Plante } from '../interface/Plante';
import { AuthService } from './Authentification/authService';


const routes = {
  plante: '/plante'
};


@Injectable({
  providedIn: 'root'
})
export class PlanteService {

  private apiUrl = environment.dev;

  constructor(private http: HttpClient, private authService: AuthService) { }

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
/* 
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
  } */



  getAllPlante(): void {
    this.authService.request(
      "GET",
      "/plantes",
      {}
    )
    .pipe(
      map((response: any) => {
        this.authService.setAuthToken(response.token);
        console.log(response);
      }),
      catchError((error: any) => {
        this.authService.setAuthToken(null);
        return throwError(error);
      })
    )
    .subscribe();
  }
  

}

