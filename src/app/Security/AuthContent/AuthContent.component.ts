import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/Authentification/authService';
import { CommonModule } from '@angular/common';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-AuthContent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './AuthContent.component.html',
  styleUrls: ['./AuthContent.component.css']
})
export class AuthContentComponent implements OnInit {
  data: string = "";

  constructor( @Inject(AuthService)private AuthService: AuthService) { }

/*   ngOnInit(): void {
    this.AuthService.request(
      "GET",
      "/messages",
      {}).then(
        (response: { data: string[]; }) => {
          this.data = response.data;
        }).catch(
          (error: { response: { status: number; code: string[]; }; }) => {
            if (error.response.status === 401) {
              this.AuthService.setAuthToken(null);
            } else {
              this.data = error.response.code;
            }

          }
        );
  } */

  ngOnInit(): void {
    this.AuthService.request('GET', '/messages', {})
      .pipe(
        map(
          (response: string) => {
          this.data = response;
        }),
        catchError((error: any) => {
          if (error.status === 401) {
            this.AuthService.setAuthToken(null);
          } else {
            console.error(error); // Gérer l'erreur en conséquence
          }
          return throwError(() => new Error(error));
        })
      )
      .subscribe();
  }



}