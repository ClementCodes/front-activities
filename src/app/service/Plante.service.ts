import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environement/environment';
import { Plante } from '../interface/Plante';
import { AuthService } from './Authentification/authService';

const routes = {
  plante: '/plante',
};

@Injectable({
  providedIn: 'root',
})
export class PlanteService {
  getToutesPlantes() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = environment.dev;

  constructor(private http: HttpClient, private authService: AuthService) {}

  createPlante(planteData: Plante): Observable<Plante> {
    // Vérifier si l'utilisateur est authentifié
    if (!this.authService.isAuthenticated()) {
      // Gérer le cas où l'utilisateur n'est pas authentifié
      // Par exemple, afficher un message d'erreur ou rediriger vers la page de connexion
      // return null; ou rediriger vers la page de connexion
      throw new Error('Utilisateur non authentifié');
    }

    // En-têtes HTTP avec le token d'authentification
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getAuthToken()}`
    );

    // Effectuer la requête HTTP POST pour créer la plante
    return this.http.post<Plante>(`${this.apiUrl}/plantes`, planteData, {
      headers,
    });
  }

  // READ (GET all plantes)
  getAllPlantes(): Observable<Plante[]> {
    // Vérifier si l'utilisateur est authentifié
    if (!this.authService.isAuthenticated()) {
      // Gérer le cas où l'utilisateur n'est pas authentifié
      // Par exemple, afficher un message d'erreur ou rediriger vers la page de connexion
      // return null; ou rediriger vers la page de connexion
      throw new Error('Utilisateur non authentifié');
    }

    // En-têtes HTTP avec le token d'authentification
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getAuthToken()}`
    );

    // Effectuer la requête HTTP POST pour créer la plante

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