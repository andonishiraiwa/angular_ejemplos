import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodosService } from 'src/app/providers/todos.service';

@Component({
  selector: 'app-pagina-tareas',
  templateUrl: './pagina-tareas.component.html',
  styleUrls: ['./pagina-tareas.component.scss']
})
export class PaginaTareasComponent implements OnInit {

  //declaramos el array
  todos : Todo[]; //modelo Todo asignado a 'todos'

  nuevaTarea : string;

  constructor( public todosService:TodosService ) { 
    //llamamos al servicio TodosService , nos referiremos a el como todosService
      console.log('TodosComponent constructor');
      this.todos = [];
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit');
    this.cargarTareas();

  }
  //ngOnInit

  cargarTareas(){ //llamaremos a la funcion getTodos() del servicio 'todos.service.ts' para sacar las tareas
    console.log('TodosComponent cargarTareas');
    this.todos = [];  
     this.todosService.getTodos().subscribe( //el getTodos() de la clase TodosService
      resultado => {
        console.debug('peticion correcta %o', resultado);
       // this.mapeo(resultado);
      // this.todos = resultado.filter( todo => !todo.completed );
         this.todos = resultado;
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe

    
  }

  /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapeo( result : any ){

    let todo:Todo;
    result.forEach(el => {
        todo = new Todo( el.title );
        todo.id = el.id;
        todo.idUser = el.userId;
        todo.completed = el.completed;

        this.todos.push(todo);
    });

  }

  change(todo:Todo){ //llama al service y hace un patch
    console.log('TodosComponent change %o', todo );
    this.todosService.patch(todo).subscribe(     
        result=>{
          console.log('Tarea modificada con exito %o', result);
          this.cargarTareas();
        },
        error=>{
          alert('No de pudo Modificar la Tarea');
        }      
    );
  }

  delete(todo:Todo){ //llama al servicio para borrar una yarea
    console.log('TodosComponent delete %o', todo );

    this.todosService.delete(todo.id).subscribe(
      result=>{
        this.cargarTareas();
      },
      error=>{
        alert('No de pudo elimiar Tarea');
      }
    );
    /*
    this.todos.forEach( (t, index) =>{
      if ( t.id === todo.id ){
        this.todos.splice(index,1);
        return false; //break        
      }
    });*/

  }
  
  new(){ //llama al servicio y crea una nueva tarea [POST] y se suscribe
    console.log('TodosComponent new ');
    let todo = new Todo(this.nuevaTarea);
    /*
    let todo = new Todo(this.nuevaTarea);
    this.todos.unshift(todo);
    this.nuevaTarea = "";
    */
    this.todosService.post(todo).subscribe(
      result=>{
        console.log('TodosComponent new %o', result);
        this.cargarTareas();
      },
      error=>{
        alert('No de pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
  }



}
