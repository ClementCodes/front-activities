import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { PlanteService } from '../../../../../service/Plante.service';


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
  form!: FormGroup;


  constructor(private formBulder: FormBuilder, private router: Router, private planteService: PlanteService
  ) {


    this.form = this.formBulder.group({
      nomPlante: ["", Validators.required],
      agePlante: ["", Validators.required],
      dateArrosage: ["", Validators.required]

    })

  }

  ngOnInit() {

    console.log(this.form.valid)
  }





  onSubmit() {
    if (this.form?.valid) {
      console.log("formulaire soumis")
      console.log(this.form.value)
      this.planteService.createPlante(this.form.value)
      console.log('firstadda')
      this.router.navigate(['/jardin']);

    }

  }

}
