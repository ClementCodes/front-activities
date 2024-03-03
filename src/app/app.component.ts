import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { LoginComponent } from './Security/Login/Login.component';
import { AppService } from './service/App.service';
import { HttpClient } from '@angular/common/http';
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
export class AppComponent implements OnInit {
  constructor(private app: AppService, private http: HttpClient, private router: Router) {

  }
  ngOnInit(): void {
    // Ici, vous pouvez initialiser des données ou effectuer d'autres actions lors du chargement du composant
  }




}

