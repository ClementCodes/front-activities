import { NgModule } from '@angular/core';
import { PlanteService } from '../../../service/Plante.service';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [CommonModule]
  ,
  exports: [CommonModule]
  ,
  providers: [PlanteService],
  declarations: []
})
export class SharedPersoModule { }
