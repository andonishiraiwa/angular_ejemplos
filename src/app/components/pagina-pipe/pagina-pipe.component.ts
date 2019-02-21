import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-pagina-pipe',
  templateUrl: './pagina-pipe.component.html',
  styleUrls: ['./pagina-pipe.component.scss']
})
export class PaginaPipeComponent implements OnInit {

  nombre: string;
  numero: number;
cadena:string;


  constructor() { 

    console.trace();
      this.nombre='Manlito GAfOtAs'
      this.numero=2354235;
    this.cadena="  Hola  khe   ashe!?  ";


  }

  ngOnInit() {
  }

}
