import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jardin',
  standalone: false,
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.scss']
})
export class JardinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("first")
  }

}
