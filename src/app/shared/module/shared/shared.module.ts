import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../../../pages/home/home-component/home/home.component';
import { PlanteServiceService } from '../../../service/PlanteService.service';
import { PageJardinComponent } from '../../../pages/mon jardin/pageJardin/pageJardin.component';
@NgModule({
  imports: [CommonModule, CalendarModule, FormsModule, KeyFilterModule, InputTextModule, ReactiveFormsModule, HttpClientModule]
  ,
  exports: [HttpClientModule
  ],
  providers: [PlanteServiceService, HomeComponent],
  declarations: [HomeComponent, PageJardinComponent]
})
export class SharedModule { }
