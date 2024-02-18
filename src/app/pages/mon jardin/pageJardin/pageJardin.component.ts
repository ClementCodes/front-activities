import { Component, OnInit } from '@angular/core';
import { PlanteComponent } from '../../../component/Plante/Plante/Plante.component';
import { PlanteModule } from '../../../shared/module/plante/plante.module';
import { CommonModule } from '@angular/common';
import { PlanteService } from '../../../service/Plante.service';
import { Plante } from '../../../interface/Plante';
@Component({
  selector: 'app-pageJardin',
  standalone: true,
  imports: [PlanteModule, CommonModule],
  templateUrl: './pageJardin.component.html',
  styleUrls: ['./pageJardin.component.scss']
})
export class PageJardinComponent implements OnInit {

  plantes: Plante[] = [];


  constructor(private planteService: PlanteService) { }

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
