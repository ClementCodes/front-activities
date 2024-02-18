import { Component, OnInit, ViewChild } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
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


  constructor() { }

  ngOnInit() {
  }


  onSubmit() {

    if (this.form.valid) {
      console.log(this.form.value);
    }


  }

}
