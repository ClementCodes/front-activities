import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { LoginComponent } from './Security/Login/Login.component';
import { HeaderComponent } from './component/header/header/header.component';
import { ContentComponent } from './component/content/Content/Content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CalendarModule, LoginComponent, HeaderComponent, ContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  constructor() {

  }





}

