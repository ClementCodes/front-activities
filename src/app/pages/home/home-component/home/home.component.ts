import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { PlanteService } from '../../../../service/Plante.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalendarModule, ReactiveFormsModule, CalendarModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nomPlante!: string;
  agePlante!: Date;
  dateArrosage!: Date;
  formPlante!: FormGroup;


  constructor(private formBulder: FormBuilder, private router: Router, private planteService: PlanteService
  ) {


  }

  ngOnInit() {
    this.formPlante = this.formBulder.group({
      nomPlante: ["", Validators.required],
      agePlante: ["", Validators.required],
      dateArrosage: ["", Validators.required]

    })

  }

  onSubmit() {
    if (this.formPlante?.valid) {
      console.log("formulaire soumis")
      console.log(this.formPlante.value)
      this.planteService.createPlante(this.formPlante.value)
      console.log('firstadda')
      this.router.navigate(['/jardin']);

    }

  }

}
