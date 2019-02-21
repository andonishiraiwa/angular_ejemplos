import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { ListafrutasService } from 'src/app/providers/listafrutas.service';

@Component({
  selector: 'app-pagina-listafrutas',
  templateUrl: './pagina-listafrutas.component.html',
  styleUrls: ['./pagina-listafrutas.component.scss']
})
export class PaginaListafrutasComponent implements OnInit {

  //definimos el array
  frutas: Fruta[]; //modelo fruta asignado a 'frutas'

  nuevaFruta : string


  constructor(public listafrutasService: ListafrutasService) {

    //llamada al servicio ListafrutasService como listafrutasService
    console.log('FrutasComponent constructor');
    this.frutas = [];
  }
  ngOnInit() {

this.cargarFrutas();

  }


  cargarFrutas() { //hace falta llamar a la funcion getFrutas de 'listafrutas.service.ts'
    //aqui llamamos a las funciones del ts de pagina-tareas

    //volvemos a inicializar el array que vamos a llenar para listar

    this.frutas = [];

    //llamamos a la funcion getListafrutas() del servicio ListafrutasService
   
    this.listafrutasService.getListafrutas().subscribe(
     
     
      //el getListafrutas() de la clase ListafrutasService
      resultado => {

        this.frutas = resultado; //

      },
      //si falla:

      error => {
        console.warn('peticion incorrecta %o', error);

      }); //end subscribe

  }


}
