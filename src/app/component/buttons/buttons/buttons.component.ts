import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WelcomeContentComponent } from '../../../pages/welcome/WelcomeContent/WelcomeContent.component';
import { LoginComponent } from '../../../Security/Login/Login.component';
import { AuthContentComponent } from '../../auth-content/AuthContent/AuthContent.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [WelcomeContentComponent, LoginComponent, AuthContentComponent],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
