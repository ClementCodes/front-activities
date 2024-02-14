import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanteComponent } from '../../../component/Plante/Plante/Plante.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlanteComponent],
  declarations: [PlanteComponent]
})
export class PlanteModule { }
