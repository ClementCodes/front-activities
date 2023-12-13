import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/module/shared/shared.module';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, CalendarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  date: Date | undefined;
  msg = '';
  it = "njkboz";


  constructor() { }

  ngOnInit() {
  }

}
