import { NgModule } from '@angular/core';
import { PlanteServiceService } from '../../../service/PlanteService.service';
import { PageJardinComponent } from '../../../pages/mon jardin/pageJardin/pageJardin.component';
@NgModule({
  imports: []
  ,
  exports: []
  ,
  providers: [PlanteServiceService],
  declarations: [PageJardinComponent]
})
export class SharedPersoModule { }