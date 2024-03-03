import { NgModule } from '@angular/core';
import { PlanteService } from '../../../service/Plante.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
@NgModule({
  imports: [CommonModule, PasswordModule, DividerModule, InputTextModule, FormsModule, ReactiveFormsModule, ButtonModule]
  ,
  exports: [CommonModule, PasswordModule, DividerModule, InputTextModule, FormsModule, ReactiveFormsModule, ButtonModule]
  ,
  providers: [PlanteService],
  declarations: []
})
export class SharedPersoModule { }
