import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/module/shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlanteServiceService } from '../../../service/PlanteService.service';
import { Plante } from '../../../Plante';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, CalendarModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  agePlante: Date | undefined;
  dateArrosage: Date | undefined;
  formPlante?: FormGroup |any;


  constructor(private formBulder: FormBuilder, private readonly planteService: PlanteServiceService) {
    

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
}

  }

}
