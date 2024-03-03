import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../../service/Axios/axiosService';
import { WelcomeContentComponent } from '../../../pages/welcome/WelcomeContent/WelcomeContent.component';
import { LoginComponent } from '../../../Security/Login/Login.component';
import { AuthContentComponent } from '../../auth-content/AuthContent/AuthContent.component';
import { ButtonsComponent } from '../../buttons/buttons/buttons.component';
import { SharedPersoModule } from '../../../shared/module/shared/sharedPerso.module';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [WelcomeContentComponent, LoginComponent, AuthContentComponent, ButtonsComponent, SharedPersoModule],
  templateUrl: './Content.component.html',
  styleUrls: ['./Content.component.css']
})
export class ContentComponent implements OnInit {
  componentToShow: string = "welcome";
  constructor(private axiosService: AxiosService) { }

  ngOnInit() {
  }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }).then(
        response => {
          this.axiosService.setAuthToken(response.data.token);
          this.componentToShow = "messages";
        }).catch(
          error => {
            this.axiosService.setAuthToken(null);
            this.componentToShow = "welcome";
          }
        );

  }

  onRegister(input: any): void {
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }).then(
        response => {
          this.axiosService.setAuthToken(response.data.token);
          this.componentToShow = "messages";
        }).catch(
          error => {
            this.axiosService.setAuthToken(null);
            this.componentToShow = "welcome";
          }
        );
  }

}