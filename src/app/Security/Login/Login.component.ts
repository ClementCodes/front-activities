import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedPersoModule } from '../../shared/module/shared/sharedPerso.module';
import { AuthService } from '../../service/Authentification/authService';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-Login',
  standalone: true,
  imports: [SharedPersoModule],
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent  {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();


  constructor(private authService: AuthService, private router: Router) {}


  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  login: string = "";
  password: string = "";

  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({ "login": this.login, "password": this.password });
   this.onLogin();
    console.log("first")
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({ "firstName": this.firstName, "lastName": this.lastName, "login": this.login, "password": this.password });
    this.onRegister()
  }




  onLogin(): void {
    this.authService
      .request('POST', '/login', {
       login: this.login,
        password: this.password,
      })
      .pipe(
        map((response: any) => {
          this.authService.setAuthToken(response.token);
          this.router.navigate(['/jardin']); 
        }),
        catchError((error: any) => {
          this.authService.setAuthToken(null);
          return throwError(error);
        })
      )
      .subscribe();
  }

  onRegister(): void {
    this.authService
      .request('POST', '/register', {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        password: this.password,
      })
      .pipe(
        map((response: any) => {
          this.authService.setAuthToken(response.token);
          this.router.navigate(['/jardin']); 
        }),
        catchError((error: any) => {
          this.authService.setAuthToken(null);
          return throwError(error);
        })
      )
      .subscribe();
  }





}