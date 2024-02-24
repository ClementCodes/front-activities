import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { PlanteService } from '../../../../service/Plante.service';
import { Plante } from '../../../../interface/Plante';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CalendarModule, ReactiveFormsModule, CalendarModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nom!: string;
  age!: Date;
  dateArrosage!: Date;
  formPlante!: FormGroup;

  constructor(private formBulder: FormBuilder, private router: Router, private planteService: PlanteService) { }

  ngOnInit() {
    this.formPlante = this.formBulder.group({
      nom: ["", Validators.required],
      age: ["", Validators.required],
      dateArrosage: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.formPlante.valid) {
      console.log("Formulaire soumis");

      this.planteService.createPlante(this.formPlante.value).subscribe({
        next: (plante: Plante) => {

          this.router.navigate(['/jardin']);
          console.log(plante)
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')

      })


    }
  }
}
