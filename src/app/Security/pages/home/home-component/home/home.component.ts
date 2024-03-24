import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { Plante } from '../../../../../interface/Plante';
import { PlanteService } from '../../../../../service/Plante.service';
import { AuthService } from '../../../../../service/Authentification/authService';
import { catchError, map, throwError } from 'rxjs';


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
  form!: FormGroup;

  constructor(private formBulder: FormBuilder, private router: Router, private planteService: PlanteService,private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBulder.group({
      nom: ["", Validators.required],
      age: ["", Validators.required],
      dateArrosage: ["", Validators.required]
    });
  }

 onSubmit() {
    if (this.form.valid) {
      console.log("Formulaire soumis");

      this.planteService.createPlante(this.form.value).subscribe({
        next: (plante: Plante) => {

           this.router.navigate(['/jardin']); 
          console.log(plante)
        },
        error: (e: any) => [console.error(e),console.log(e, "creation de la plante")],
        complete: () => console.info('complete')

      })


    }

  } 


/* 
 onSubmit(): void {
    this.authService.request(
      "POST",
      "/plantes",
      {
       plante : this.form.value
      }
    )
    .pipe(
      map((response: any) => {

        console.log(1)
        console.log(this.authService.setAuthToken(response.token))
        this.authService.setAuthToken(response.token);
         this.componentToShow = "messages"; 
        this.componentToShow = "jardin"; 

      }),
      catchError((error: any) => {
        this.authService.setAuthToken(null);
  this.componentToShow = "welcome";
        return throwError(error); 
      })
    )
    .subscribe();
  }
 */


}
