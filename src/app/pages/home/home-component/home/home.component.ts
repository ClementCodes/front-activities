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

  nom!: string;
  age!: Date;
  dateArrosage!: Date;
  formPlante!: FormGroup;


  constructor(private formBulder: FormBuilder, private router: Router, private planteService: PlanteServiceService
  ) {


  }

  ngOnInit() {
    this.formPlante = this.formBulder.group({
      nom: ["", Validators.required],
      age: ["", Validators.required],
      dateArrosage: ["", Validators.required]

    })

  }

  onSubmit() {
    if (this.formPlante?.valid) {
      console.log("formulaire soumis")

      this.planteService.sauvegarderPlante(this.formPlante.value).subscribe(() => {
        console.log("Plante sauvegardée avec succès !");
        this.router.navigate(['/jardin']);
      });

    }

  }

}
