import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanteComponent } from '../../../component/Plante/Plante/Plante.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    CommonModule, CardModule, ButtonModule
  ],
  exports: [PlanteComponent],
  declarations: [PlanteComponent]
})
export class PlanteModule { }
