import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  imports: [CommonModule, CalendarModule, FormsModule, KeyFilterModule, InputTextModule
  ],
  exports: [CommonModule, CalendarModule, FormsModule, KeyFilterModule, InputTextModule,SharedComponent
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
