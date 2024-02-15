import { Component, Input, OnInit } from '@angular/core';
import { Plante } from '../../../Plante';
import { PlanteService } from '../../../service/Plante.service';

@Component({
  selector: 'app-Plante',
  templateUrl: './Plante.component.html',
  styleUrls: ['./Plante.component.css']
})
export class PlanteComponent implements OnInit {

  @Input() plantes?: Plante[];


  constructor(private planteService: PlanteService) {
  }
  ngOnInit() {


  }
}
