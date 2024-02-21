import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    CommonModule, CardModule, ButtonModule,
    DividerModule,
    PasswordModule,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  value!: string;
  constructor(private primengConfig: PrimeNGConfig) { }

  title = 'my-activities';

  ngOnInit() {
    this.primengConfig.ripple = true;

    console.log("application pour l'ecologie  initialisée")
  }
}
