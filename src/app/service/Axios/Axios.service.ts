import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  private apiUrl = 'https://api.example.com'; // Remplacez ceci par l'URL de votre API

  constructor() {



    axios.defaults.baseURL = "http://localhost:8080"
    axios.defaults.headers.post["Content-Type"] = "application.json"
  }

  // Méthode pour effectuer une requête GET


  request(method: string, url: string, data: any): Promise<any> {


    return axios({

      method: method,
      url: url,
      data: data
    })
  }
}