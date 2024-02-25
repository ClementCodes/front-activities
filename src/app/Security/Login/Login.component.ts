import { Component, OnInit } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../service/security/Auth.service';
import { Router, RouterLink } from '@angular/router';
import { PlanteService } from '../../service/Plante.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-Login',
  standalone: true,
  imports: [PasswordModule, DividerModule, InputTextModule, FormsModule, ReactiveFormsModule, ButtonModule, CommonModule],
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  data: string[] = [];

  form: FormGroup = new FormGroup({
    email: new FormControl('email'),
    password: new FormControl('password')
  });

  constructor(private authService: AuthService, private router: Router, private planteService: PlanteService) { }

  ngOnInit() {
    console.log(this.form.valid)

  }

  onSubmit() {
  }


  navigateToJardin() {
    this.router.navigate(['/jardin']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }


}
