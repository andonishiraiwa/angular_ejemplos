
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-coches-comparador",
  templateUrl: "./coches-comparador.component.html",
  styleUrls: ["./coches-comparador.component.scss"]
})
export class CochesComparadorComponent implements OnInit {

  coches: any[];
  cocheSelec1: any;
  cocheSelec2: any;
  cocheEnCarrito: any[];
  
  constructor() {
    this.coches = [
      {
        nombre: "astra",
        km: 80000,
        precio: 359000,
        descuento: 5,
        imagen:
          "https://www.diariomotor.com/imagenes/picscache/1920x1600c/opel-astra-ficha-1217-028_1920x1600c.jpg",
        colores: [{ nombre: "rojo", codigo: "#F00" },
        { nombre: "blanco perla", codigo: "#F1F5EF" }
      ]
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

    this.cocheSelec1 = this.coches[0];
    this.cocheSelec2 = this.coches[1];
    this.cocheEnCarrito=[];
  }

  ngOnInit() {

  }


  cambiarCoche(i: number) {
    console.log('click cambiarCoche %o', i);
    this.cocheSelec2 = this.cocheSelec1;
    this.cocheSelec1 = this.coches[i];

  }

  //escucha el evento que lanza el hijo
  escuchoPedido(event) {

    this.cocheEnCarrito.push(event);

  }

  //cocheEnCarrito - array de los coches del carrito
  
  eliminarCarro(cCarro:any):void{ //donde cCarro es únicamente una definicion para distinguir el contenido del carro del array
    console.trace();
    this.cocheEnCarrito=this.cocheEnCarrito.filter(c=> {return c.nombre !=cCarro.nombre});
  }
}
