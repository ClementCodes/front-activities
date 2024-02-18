import { Component, Input, OnInit } from '@angular/core';

import { PlanteService } from '../../../service/Plante.service';
import { Plante } from '../../../interface/Plante';

@Component({
  selector: 'app-Plante',
  templateUrl: './Plante.component.html',
  styleUrls: ['./Plante.component.scss']
})
export class PlanteComponent implements OnInit {

  @Input() plantes?: Plante[];


  constructor(private planteService: PlanteService) {
  }
  ngOnInit() {


  }
}
