import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanteServiceService } from '../../../../service/PlanteService.service';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalendarModule, ReactiveFormsModule, CalendarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nomPlante!: string;
  agePlante!: Date;
  dateArrosage!: Date;
  formPlante!: FormGroup;


  constructor(private formBulder: FormBuilder, private router: Router, private planteService: PlanteServiceService
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
      this.planteService.sauvegarderPlante(this.formPlante.value)
      console.log('firstadda')
      this.router.navigate(['/jardin']);

    }

  }

}
