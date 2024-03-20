import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { PlanteService } from '../../service/Plante.service';
import { CommonModule } from '@angular/common';
import { SharedPersoModule } from '../../shared/module/shared/sharedPerso.module';
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
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({ "firstName": this.firstName, "lastName": this.lastName, "login": this.login, "password": this.password });
  }

}