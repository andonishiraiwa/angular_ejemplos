import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  @Input('coche') coche: string;

  // evento de salida, este nombre 'llamarPadre' se debe capturar en componentePadre
  @Output() llamarPadre = new EventEmitter();

  constructor() {
   
    console.trace('TraductorComponent constructor');
   }

  ngOnInit() {
  }
   /**
   * Al realizar click sobre el boton, tenemos que emitir un evento para avisar al padre
   * usando la nombre del @Output llamarPadre: EventEmitter
   * @param event 
   */
  clickBotton(event){

    let datosEnviar = {
        'coche': this.coche,
      
    };


// llamarPadre => @Output hay que usar la funcion "EMIT"
this.llamarPadre.emit( datosEnviar );
}
}