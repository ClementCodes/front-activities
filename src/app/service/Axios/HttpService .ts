import { Injectable } from '@angular/core';
import axios from 'axios';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  private apiUrl = 'http://localhost:8080'; // Remplacez ceci par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour effectuer une requête GET
  fetchData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/messages`);
  }

  // Méthode pour effectuer une requête POST
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/messages`, data);
  }
}