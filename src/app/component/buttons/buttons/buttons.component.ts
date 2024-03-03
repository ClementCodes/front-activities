import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WelcomeContentComponent } from '../../../pages/welcome/WelcomeContent/WelcomeContent.component';
import { LoginComponent } from '../../../Security/Login/Login.component';
import { AuthContentComponent } from '../../auth-content/AuthContent/AuthContent.component';
import { SharedPersoModule } from '../../../shared/module/shared/sharedPerso.module';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [WelcomeContentComponent, LoginComponent, AuthContentComponent, SharedPersoModule],
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
