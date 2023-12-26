import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plante } from '../Plante';


const routes = {
  plante: '/plante'
};

@Injectable({
  providedIn: 'root'
})
export class PlanteServiceService {

  constructor(private readonly httpClient: HttpClient) { }


  public CreationPlante(plante: Plante) {
    
    this.httpClient.post<void>(`${routes}/enregistrer`, plante);
  }

}
