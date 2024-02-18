import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { LoginComponent } from './Security/Login/Login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CalendarModule, LoginComponent
  ],
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
