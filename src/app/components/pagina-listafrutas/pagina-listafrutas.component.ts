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
frutaSeleccionada: Fruta; //tipo Fruta
  nuevaFruta: Fruta;
  mensaje: string;
  formulario: FormGroup;






  constructor(private listafrutasService: ListafrutasService, private formBuilder: FormBuilder) {

    //llamada al servicio ListafrutasService como listafrutasService
    console.trace('FrutasComponent constructor');
    this.frutas = [];
    this.frutaSeleccionada = new Fruta('', 0);
    this.mensaje = '';
this.frutaSeleccionada.oferta=true;
    //cuando acabemos de crear una fruta se carga esta funcion de nuevo

    //esta funcion vuelve a inicializar el formulario (esto antes formaba parte del constructor porque inicializaba)
this.crearFormulario();

    

  }


  ngOnInit() {
    console.trace('PaginaFrutasComponent ngOnInit');
    this.cargarFrutas();

  }


  
crearFormulario(){

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
    ],

    oferta:false,
    //descuento por defecto 0
    descuento:[0
   // [Validators.min(5), Validators.max(99)]
   //Pasamos las validaciones a abajo

    ],

    imagen:[Fruta.IMAGEN_DEFAULT,
    
      [Validators.required]


    ]

    colores: this.formBuilder.array([this.crearColoresformGroup()], Validators.minLength(1);


    
  });

  // subscribirnos al evento cada vez que cambia la "oferta" para validar el descuento
  this.formulario.get('oferta').valueChanges.subscribe(
    oferta=>{
      console.log('valueChanges %o', oferta);
      let descuentoFormControl = this.formulario.get('descuento');
      if (oferta){
        //Validar decuento            
        descuentoFormControl.setValidators([Validators.min(1), Validators.max(100)]);
      }else{
        //eliminar validaciones
        descuentoFormControl.setValidators([]);
      }
      //actualizar value y validaciones
      descuentoFormControl.updateValueAndValidity();
    }
  );
 
}

//creamos un grupo de colores
crearFormGroup():FormGroup{
  this.formBuilder.group({

    nombre: ['blanco', [Validators.required, Validators.minLength(2)]],
    codigo: ['#FFFFFF',
      [Validators.required, Validators.minLength(4), Validators.maxLength(7)]

    ]
  });

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

        //teniendo frutas a las que no se les agregaba un color (hasta que añadimos un selector de color en el formulario),
        //debemos añadir a las frutas ya creadas que no tengan color uno por fefecto
        if (!this.frutas['colores']) {
          this.frutas['colores'] = "";

        }
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

    this.frutaSeleccionada=fruta;

    this.formulario.controls['nombre'].setValue(fruta.nombre);
    this.formulario.controls['precio'].setValue(fruta.precio);
    this.formulario.controls['oferta'].setValue(fruta.oferta);
    this.formulario.controls['descuento'].setValue(fruta.descuento);
    this.formulario.controls['imagen'].setValue(fruta.imagen);

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

/*
  descontar(){

    if( this.formulario.controls.oferta==false){
       this.formulario.controls.descuento.setValue(0);
    }
    return this.formulario.controls.oferta;
     }
     */

  crear() {
    console.trace('submit formulario %o', this.formulario.value);
    //mapear de formulario a Fruta

    //
    let id=this.frutaSeleccionada.id;
    console.debug(`identificador fruta {id}`);

    let fruta = new Fruta(
                            this.formulario.value.nombre,
                            this.formulario.value.precio,
                            id,
                            this.formulario.value.oferta,
                            this.formulario.value.descuento,
                            this.formulario.value.imagen,
                            0 
    );


    //TODO hacer que crear pile la imagen

    this.listafrutasService.guardar(fruta).subscribe(
      data => {
        console.debug('datos en json %o', data);
        this.frutaSeleccionada=new Fruta('',0);
        this.crearFormulario();  //para id = -1
        this.cargarFrutas(); //vuelve a cargar la lista de frutas 

         //this.alert=new Alert (` NUEVA FRUTA GUARDADA`, Alert.PRIMARY); PARA COMPONENTE ALERTA
        this.mensaje = ` NUEVA FRUTA GUARDADA`; //SIN COMPONENTE
      },
      error => {
        console.error(error);
        this.mensaje = "No es posible guardar la nueva fruta";

      }
    );

  }// fin crear
}



