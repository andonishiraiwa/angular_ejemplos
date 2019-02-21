import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  nombre: string;
  apellido: string;

  constructor() { 
console.trace('SaludarComponent constructor');

    //inicializando variables
    this.nombre = "Andoni";
    this.apellido = "Penalva";

    
  }

  ngOnInit() {
    console.trace('SaludarComponent ngOnInit');
  }

}
