import { Component, OnInit } from '@angular/core';
import { PlanteComponent } from '../../../component/Plante/Plante/Plante.component';
import { PlanteModule } from '../../../shared/module/plante/plante.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pageJardin',
  standalone: true,
  imports: [PlanteModule, CommonModule],
  templateUrl: './pageJardin.component.html',
  styleUrls: ['./pageJardin.component.css']
})
export class PageJardinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
