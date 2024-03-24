import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environement/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    // TODO: Mettre dans le fichier environment.dev
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem('auth_token');
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem('auth_token', token);
    } else {
      window.localStorage.removeItem('auth_token');
    }
  }

  request(method: string, url: string, data: any): Observable<any> {
    let headers = new HttpHeaders();

    if (this.getAuthToken() !== null) {
      headers = headers.set('Authorization', 'Bearer ' + this.getAuthToken());
    }

    const options =
      method === 'GET' || method === 'HEAD'
        ? { headers: headers }
        : { body: data, headers: headers };

    return this.http.request(method, environment.dev + url, options);
  }

  isAuthenticated(): boolean {
    // Vérifie si le token d'authentification est présent dans le localStorage
    // Si présent, renvoie true, sinon renvoie false
    return this.getAuthToken() !== null;
  }
}
