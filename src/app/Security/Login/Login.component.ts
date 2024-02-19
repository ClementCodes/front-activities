import { Component, OnInit, ViewChild } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../service/security/Auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Login',
  standalone: true,
  imports: [PasswordModule, DividerModule, InputTextModule, FormsModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {





  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }



  onSubmit() {
    if (this.form.valid) {
      // Mettre à jour la valeur du champ 'email' avec la valeur de 'credentials.username'
      this.form.patchValue({
        email: this.credentials.username
      });

      // Afficher la valeur du champ 'email' dans la console
      console.log('Valeur du champ email :', this.form.get('email')?.value);
    }
  }

  login(): void {
    this.authService.login(this.credentials).subscribe(() => {
      // Rediriger vers la page d'accueil ou toute autre page après la connexion réussie
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Erreur de connexion mec :', error);
      // Gérer les erreurs d'authentification
    });
  }
  }


