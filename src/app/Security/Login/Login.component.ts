import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/security/Auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { AxiosService } from '../../service/Axios/Axios.service';
import { response } from 'express';

@Component({
  selector: 'app-Login',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    CommonModule, CardModule, ButtonModule,
    DividerModule,
    PasswordModule,
    InputTextModule],
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  data: string[] = [];







  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder,
    private axiosService: AxiosService) {

    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then((response) => this.data = response.data
    )




  }

  onSubmit() {
    if (this.form.valid) {
      // Si le formulaire est valide, on procède à la connexion
      this.login();
    } else {
      console.log("Le formulaire n'est pas valide");
    }
  }

  login(): void {
    const credentials = {
      username: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.login(credentials).subscribe(() => {
      // Redirection après une connexion réussie
      this.router.navigateByUrl('/login');
    }, error => {
      console.log('Erreur de connexion :', error);
      // Gestion des erreurs d'authentification
    });
  }
}
