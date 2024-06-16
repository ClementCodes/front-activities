import { Component, Input, OnInit } from '@angular/core';

import { Plante } from '../../../interface/Plante';
import { SharedPersoModule } from '../../../shared/module/shared/sharedPerso.module';
import { PlanteService } from '../../../service/Plante.service';

@Component({
  selector: 'app-Plante',
  standalone:true,
  imports:[SharedPersoModule],
  templateUrl: './PlanteComponent.html',
  styleUrls: ['./PlanteComponent.scss']
})
export class PlanteComponent implements OnInit  {

  @Input() plantes?: Plante[];
  errorMessage: string = '';
  constructor(private planteService: PlanteService) { }

  ngOnInit(): void {
    this.getPlantes();
  }

  getPlantes(): void {
    this.planteService.getAllPlantes().subscribe({
      next: (data) => {this.plantes = data , console.log(data)},
      error: (err) => this.errorMessage = err
    });
  }
 
}
