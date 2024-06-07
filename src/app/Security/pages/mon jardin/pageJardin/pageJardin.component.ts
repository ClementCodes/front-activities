import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, tap } from 'rxjs';
import { Plante } from '../../../../interface/Plante';
import { PlanteService } from '../../../../service/Plante.service';
import { SharedModule } from 'primeng/api';
import { PlanteComponent } from '../../../../component/Plante/Plante/PlanteComponent';
@Component({
  selector: 'app-pageJardin',
  standalone: true,
  imports: [SharedModule, CommonModule, PlanteComponent],
  templateUrl: './pageJardin.component.html',
  styleUrls: ['./pageJardin.component.scss'],
})
export class PageJardinComponent implements OnInit {
  plantes: Plante[] = [];

  loading$: Subject<boolean> = new Subject<boolean>();
  constructor(private planteService: PlanteService) {}

  ngOnInit() {
    this.obtenirToutesPlantes();
  }

  getPlantes(): void {
    this.planteService.getAllPlantes();
  }

  obtenirToutesPlantes(): void {
    this.planteService
      .getAllPlantes()
      .pipe(
        tap(() => this.loading$.next(false)) // Terminer le chargement
      )
      .subscribe(
        (plantes: Plante[]) => {
          this.plantes = plantes; // Stockez les plantes récupérées dans la propriété du composant
        },
        (erreur: any) => {
          console.error(
            "Une erreur s'est produite lors de la récupération des plantes : ",
            erreur
          );
        }
      );
  }
}
