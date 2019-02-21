import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  frutas: any[];
  searchText: string;
  isOferta: boolean;

  f_nombres: any[];
  f_precios: any[];

  f_oferta: any[];
  f_no_oferta: any[];
  total_frutas: number;
  total_frutas_oferta: number;
  f_nombre_precio: any[];
  f_par: any[];
  f_impar: any[];
  

  frutaSeleccionada: string;

  constructor() {

    this.searchText = '';   
    this.isOferta = false;
    console.trace('PaginaArrayComponent constructor');

    this.frutaSeleccionada = this.frutas[0]; 
    this.frutas = [
      {
        "nombre": "fresa",
        "oferta": true,
        "precio": 3.59,
        "descuento": 5,
        "imagen": "http://www.hobbysaliplant.com/93-thickbox_default/fresa.jpg",
        "colores": [
          { "nombre": "rojo", "codigo": "#F00" }
        ]
      },
      {
        "nombre": "pomelo",
        "oferta": false,
        "precio": 7.43,
        "descuento": 7,
        "imagen": "http://frutasfercas.com/wp-content/uploads/2018/03/pomelo-1.jpg",
        "colores": [
          { "nombre": "rojo", "codigo": "#F00" },
          { "nombre": "naranja", "codigo": "#FFA500" },
        ]
      },
      {
        "nombre": "chirimoya",
        "oferta": true,
        "precio": 10,
        "descuento": 0,
        "imagen": "https://www.frutorganic.com/wp-content/uploads/2017/10/Chirimoya.jpg",
        "colores": [
          { "nombre": "verde", "codigo": "#0F0" }
        ]
      },
      {
        "nombre": "manzana",
        "oferta": true,
        "precio": 5.59,
        "descuento": 3.5,
        "imagen": "http://www.tiendaecologicaenmadrid.com/112-thickbox_default/manzana-royal-gala-ecologica.jpg",
        "colores": [
          { "nombre": "verde", "codigo": "#0F0" },
          { "nombre": "rojo", "codigo": "#F00" },
          { "nombre": "amarillo", "codigo": "#FF0" }
        ]
      },
      {
        "nombre": "tamarindo",
        "oferta": true,
        "precio": 13.70,
        "descuento": 3,
        "imagen": "https://www.naturesflavors.com/30885-large_default/tamarindo-flavor-powder-natural-kosher-vegan-gluten-free.jpg",
        "colores": [
          { "nombre": "negro", "codigo": "#000" },
          { "nombre": "verde", "codigo": "#0F0" }
        ]
      }
    ];



    console.trace('comenzamos a mappear el array de frutas');

    //--------------CALLBACK---------------------

    this.f_nombres = this.frutas.map(
      function (value, index, array) {


        console.debug('value: ' + value);
        console.debug('index: ' + index);
        console.debug('array: ' + array);

        return value.nombre
      });

    this.f_nombre_precio = this.frutas.map(fruta => {
      return {
        "nombre": fruta.nombre,
        "precio": fruta.precio
      };
    });

    this.f_oferta = this.frutas.filter(f => f.oferta).map(f => { return f.nombre });
    this.f_no_oferta = this.frutas.filter(f => !f.oferta).map(f => { return f.nombre });

    this.total_frutas = this.frutas.map(f => f.precio).reduce((p, c) => { return p + c }, 0);
    this.total_frutas_oferta = this.frutas.filter(f => f.oferta).map(f => f.precio).reduce((previous, content) => { return previous + content }, 0);

    //PAR / IMPAR : TODAS las frutas (0 se considera indice par)

   //condicion: estar en los indices pares
    this.f_par = this.frutas.filter((f, i) => (  i % 2 == 0)).map(f => { return f.nombre });
  // 2ºcondicion: estar en los indices impares
    this.f_impar = this.frutas.filter((f, i) => ( i % 2 != 0)).map(f => { return f.nombre });
  }
  calcularDescuento(fruta: any) {

    return fruta.precio - (fruta.precio * fruta.descuento / 100);
  }

  //transform(frutas: any[], isOferta:boolean, searchText?:string):any[]{

  cambiarOferta(value: boolean) { //condicion para mostrar precios con oferta o sin
    this.isOferta = value;
    console.debug('click cambiarOferta ' + this.isOferta);
  }
  
  cambiarFruta( fruta: string){
    this.frutaSeleccionada = fruta;
  }


  ngOnInit() {
  }

}
