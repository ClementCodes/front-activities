import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/security/Auth.service';

@Component({
  selector: 'app-Acceuil',
  templateUrl: './Acceuil.component.html',
  styleUrls: ['./Acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {





    this.AuthService.getTestFromUrl().subscribe(
      (response) => {
        console.log('Réponse de l\'URL :', response);
        // Utiliser la réponse de l'URL ici
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'URL :', error);
      }
    );
  }



}


