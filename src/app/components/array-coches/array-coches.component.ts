import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-coches',
  templateUrl: './array-coches.component.html',
  styleUrls: ['./array-coches.component.scss']
})
export class ArrayCochesComponent implements OnInit {

  coches: any[];
  cocheSelec1: any;
  cocheSelec2: any;

  coche: string;
  cocheSeleccionado: string;

  constructor() {


    this.coches = [
      {
        nombre: "astra",
        km: 80000,
        precio: 359000,
        descuento: 5,
        imagen:
          "https://www.diariomotor.com/imagenes/picscache/1920x1600c/opel-astra-ficha-1217-028_1920x1600c.jpg",
        color: [{ nombre: "rojo", codigo: "#F00" }]
      },
      {
        nombre: "leon",
        km: 24000,
        precio: 700400,
        descuento: 7,
        imagen:
          "https://www.abc.es/Media/201502/18/1-Seat-Leon_ST_Cupra_2015_1600x1200_wallpaper_07--644x362.jpg",
        colores: [
          { nombre: "rojo", codigo: "#F00" },
          { nombre: "azul", codigo: "#0000FF" }
        ]
      },
      {
        nombre: "ibiza",
        km: 30000,
        precio: 600000,
        descuento: 0,
        imagen:
          "https://cdn77.motor.es/fotos-noticias/2017/08/min652x435/precio-seat-ibiza-2017-cambio-dsg-201738643_1.jpg",
        colores: [
          { nombre: "verde", codigo: "#0F0" },
          { nombre: "azul", codigo: "#0000FF" }
        ]
      }
    ];

    this.cocheSeleccionado = this.coches[0];
    this.cocheSelec1 = this.coches[0];
    this.cocheSelec2 = this.coches[1];
  }

  ngOnInit() {
  }
  cambiarCoche(i: number) {
    console.log('click cambiarCoche %o', i);
    this.cocheSelec2 = this.cocheSelec1;
    this.cocheSelec1 = this.coches[i];

  }
  escucho(event) {

    alert('Hemos recibido el coche=' + event.coche);
  }



}
