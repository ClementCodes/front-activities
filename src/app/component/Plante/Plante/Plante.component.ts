import { Component, OnInit } from '@angular/core';
import { Plante } from '../../../Plante';
import { PlanteService } from '../../../service/Plante.service';

@Component({
  selector: 'app-Plante',
  templateUrl: './Plante.component.html',
  styleUrls: ['./Plante.component.css']
})
export class PlanteComponent implements OnInit {

  plantes: Plante[] = [];



  constructor(private planteService: PlanteService) {
  }
  ngOnInit() {

    this.obtenirToutesPlantes();

  }



  obtenirToutesPlantes(): void {
    this.planteService.getToutesPlantes().subscribe(
      (plantes: Plante[]) => {
        this.plantes = plantes; // Stockez les plantes récupérées dans la propriété du composant
      },
      (erreur) => {
        console.error('Une erreur s\'est produite lors de la récupération des plantes : ', erreur);
      }
    );
  }
}
