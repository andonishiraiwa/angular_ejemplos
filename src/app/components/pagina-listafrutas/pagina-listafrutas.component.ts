import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { ListafrutasService } from 'src/app/providers/listafrutas.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/*
constructor(private formBuilder: FormBuilder) {}
public ngOnInit() {
  this.form = this.formBuilder.group({});
}


Form-group: agrupacion de FormControl
FormControl === input -- es tecnicamente un input
*/




@Component({
  selector: 'app-pagina-listafrutas',
  templateUrl: './pagina-listafrutas.component.html',
  styleUrls: ['./pagina-listafrutas.component.scss']
})
export class PaginaListafrutasComponent implements OnInit {

  //definimos el array
  frutas: Fruta[]; //modelo fruta asignado a 'frutas'

  nuevaFruta: Fruta;
  mensaje: string;
  formulario: FormGroup;






  constructor(private listafrutasService: ListafrutasService, private formBuilder: FormBuilder) {

    //llamada al servicio ListafrutasService como listafrutasService
    console.trace('FrutasComponent constructor');
    this.frutas = [];
    this.nuevaFruta = new Fruta('', 0);
    this.mensaje = '';


    //inicializamos el formulario


    this.formulario = this.formBuilder.group({

      //nombre de FormControll
      nombre: [
        '',                                                                         // value
        [Validators.required, Validators.minLength(3), Validators.maxLength(150)]   // Validaciones
      ],

      precio: [
        0.99,
        [Validators.required, Validators.min(0.99), Validators.max(9999)]
      ]


    });


  }


  ngOnInit() {
    console.trace('PaginaFrutasComponent ngOnInit');
    this.cargarFrutas();

  }


  cargarFrutas() { //hace falta llamar a la funcion getFrutas de 'listafrutas.service.ts'
    //aqui llamamos a las funciones del ts de pagina-tareas

    //volvemos a inicializar el array que vamos a llenar para listar
    console.trace('PaginaFrutasComponent cargarFrutas');


    //llamamos a la funcion getListafrutas() del servicio ListafrutasService

    this.listafrutasService.getListafrutas().subscribe(
      //el getListafrutas() de la clase ListafrutasService
      /* OTRO METODO, DATA hace la misma funcion que la de abajo sin añadir linea
       */

      data => {
        console.debug("datos en json %o", data);

        this.frutas = data;
      },

      //si falla:

      error => {
        console.error(error);
        this.mensaje = "lo sentimos pero no hay conexion con el servidor";
      }
    ); //end subscribe

  }

  editar(fruta: Fruta) {
    console.trace('editar %o', fruta);

    this.formulario.controls['nombre'].setValue(fruta.nombre);


  }

  eliminar(fruta: Fruta) {
    console.trace('PaginaFrutasComponent click eliminar%o', fruta);
    if (confirm('¿Estas seguro que quieres eliminar?')) {

      this.listafrutasService.delete(fruta.id).subscribe(

        data => {
          console.debug('datos en json %o', data);
          this.cargarFrutas();
          this.mensaje = `ELIMINADA FRUTA ${fruta.nombre}`;
        },

        error => {
          console.error(error);
          this.mensaje = "No se ha podido eliminar la fruta seleccionada";

        }
      );
    }

  }//eliminar

  crear() {
    console.trace('submit formulario %o', this.formulario.value);
    //mapear de formulario a Fruta

    let fruta = new Fruta(

      this.formulario.value.nombre,
      this.formulario.value.precio


    );


    //TODO hacer que crear pile la imagen

    this.listafrutasService.crear(fruta).subscribe(
      data => {
        console.debug('datos en json %o', data);
        this.cargarFrutas(); //vuelve a cargar la lista de frutas 
        this.mensaje = `CREADA NUEVA FRUTA`;
      },
      error => {
        console.error(error);
        this.mensaje = "No es posible crear nueva fruta";

      }
    );

  }// fin crear
}



