import { Component, Input, OnInit } from '@angular/core';

import { Plante } from '../../../interface/Plante';
import { SharedPersoModule } from '../../../shared/module/shared/sharedPerso.module';

@Component({
  selector: 'app-Plante',
  standalone:true,
  imports:[SharedPersoModule],
  templateUrl: './PlanteComponent.html',
  styleUrls: ['./PlanteComponent.scss']
})
export class PlanteComponent implements OnInit  {

  @Input() plantes?: Plante[];


  ngOnInit(): void {
    console.log("mabonne")
    console.log(this.plantes)
  }

 
}
