import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  manolo: Persona;
  sinNombre: Persona;

  idiomas: string[];
  idiomaSeleccionado: string;
  textoATraducir: string;

  frutaConstructor: Fruta;
  frutaConstructorDescuento: Fruta;
  frutaConstructorCompleto: Fruta;



  constructor() {

    this.frutaConstructor = new Fruta('fresa', 3.45);
    this.frutaConstructorDescuento = new Fruta('tamarindo', 25.78, undefined, undefined, undefined, undefined);
    this.frutaConstructorCompleto = new Fruta('naranja', 5.13, 3, true, 5, 'https://png.pngtree.com/element_origin_min_pic/16/11/22/b6d2dd56d2113655aefcb387d4d98c09.jpg');

    console.debug('frutaConstructor: %o', this.frutaConstructor);
    console.debug('frutaConstructorDescuento: %o', this.frutaConstructorDescuento);
    console.debug('frutaConstructorCompleto: %o', this.frutaConstructorCompleto);


    this.idiomas = ['eu','es','en'];
    this.idiomaSeleccionado=this.idiomas[0]; //idioma eu
    this.textoATraducir="";

    this.manolo = new Persona('Manolo','','','');
    this.sinNombre = new Persona('','','','');

    //construir 3 radiobuttons y seleccionar cada idioma para que el texto cambie

// this.manolo=new Persona();

console.debug("manolo sin inicializar %o ",this.manolo);
    this.manolo.nombre='Manolo';

console.debug("dame tu nombre "+this.manolo.nombre);
   }

   cambiarIdioma(idioma:string){
     this.idiomaSeleccionado=idioma; 
   }

   escucho(event){

    alert('He recibido un evento del Hijo idioma=' + event.idioma + ' y texto=' + event.texto);
  }





  ngOnInit() {
  }

}
