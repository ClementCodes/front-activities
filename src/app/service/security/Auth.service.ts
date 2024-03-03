import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:8080/api/auth'; // Endpoint de votre backend pour l'authentification

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token); // Stocker le token JWT dans le localStorage
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token'); // Supprimer le token JWT du localStorage
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Vérifier si l'utilisateur est authentifié en vérifiant la présence du token JWT
  }


  getTestFromUrl(): Observable<string> {
    // Effectuer une requête GET vers l'URL spécifique et retourner la réponse
    return this.http.get<string>('/register').pipe(
      map((response: string) => {
        // Traitement de la réponse si nécessaire
        return response;
      })
    );
  }

}

