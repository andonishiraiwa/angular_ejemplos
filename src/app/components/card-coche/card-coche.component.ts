import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card-coche',
  templateUrl: './card-coche.component.html',
  styleUrls: ['./card-coche.component.scss']
})
export class CardCocheComponent implements OnInit {

//Declaraciones FUERA del constructor
  @Input('coche') coche: any;
  @Input('cocheComparar') cocheComparar: any;

 
  @Output() cocheDefinitivo = new EventEmitter();




  constructor() { 
  }

  ngOnInit() {
  }

  clickBotton($event){
this.cocheDefinitivo.emit(this.coche);
alert('has comprado:'+this.coche.nombre);

  }
}
