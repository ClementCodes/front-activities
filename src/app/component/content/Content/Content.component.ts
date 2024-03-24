import { Component } from '@angular/core';
import { AuthService } from '../../../service/Authentification/authService';
import { WelcomeContentComponent } from '../../../pages/welcome/WelcomeContent/WelcomeContent.component';
import { LoginComponent } from '../../../Security/Login/Login.component';
import { AuthContentComponent } from '../../../Security/AuthContent/AuthContent.component';
import { ButtonsComponent } from '../../buttons/buttons/buttons.component';
import { SharedPersoModule } from '../../../shared/module/shared/sharedPerso.module';
import { catchError, map, throwError } from 'rxjs';
import { HomeComponent } from '../../../Security/pages/home/home-component/home/home.component';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './Content.component.html',
  styleUrls: ['./Content.component.css'],
  imports: [
    WelcomeContentComponent,
    LoginComponent,
    AuthContentComponent,
    ButtonsComponent,
    SharedPersoModule,
    HomeComponent,
  ],
})


export class ContentComponent {
  componentToShow: string = 'welcome';
  constructor(private authService: AuthService) {}

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }
  onLogin(input: any): void {
    this.authService
      .request('POST', '/login', {
        login: input.login,
        password: input.password,
      })
      .pipe(
        map((response: any) => {
          this.authService.setAuthToken(response.token);
          /* this.componentToShow = "messages"; */
          this.componentToShow = 'jardin';
        }),
        catchError((error: any) => {
          this.authService.setAuthToken(null);
          this.componentToShow = 'welcome';
          return throwError(error);
        })
      )
      .subscribe();
  }

  onRegister(input: any): void {
    this.authService
      .request('POST', '/register', {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password,
      })
      .pipe(
        map((response: any) => {
          this.authService.setAuthToken(response.token);
          this.componentToShow = 'messages';
        }),
        catchError((error: any) => {
          this.authService.setAuthToken(null);
          this.componentToShow = 'welcome';
          return throwError(error);
        })
      )
      .subscribe();
  }
}
