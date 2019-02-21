import { Pipe, PipeTransform } from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Pipe({
  name: 'filtroOferta'
})
export class FiltroOfertaPipe implements PipeTransform {
/**
 * 
 * @param frutas []array con todas las frutas para filtrar
 * 
 * @param isOferta boolean, si es true filtra las frutas para mostrar solo las que estan en oferta
 * 
 * @param searchText string cadena de texto a buscar en el nombre de las frutas o colores["nombre"], es caseInsensitive
 */
transform( frutas: any[] , isOferta: boolean, searchText?: string): any[] {

  console.trace('FiltroOfertaPipe isOferta= %s searchText=%s', isOferta, searchText);





  //conseguimos el mismo array pero sin que apunte a la misma posicion de memoria
  //no usar aResult =frutas;
let aResul=frutas.map(f=>f);

//FILTRO COLORES




 //1º filtrar por oferta

 if(isOferta){
    aResul = aResul.filter(f=>f.oferta);
 }

  //2º filtrar por searchText, si esta definido y diferente vacio
  if (searchText && searchText !== '') {
    aResul = aResul.filter(f => {
      let aColores = f.colores.map(c => c.nombre); // conseguir array con nombres colores
      let colores = aColores.join(''); // conseguir un string concatenando todos los colores del array
      let busqueda = f.nombre + colores;
      return busqueda.toLowerCase().includes(searchText);

    });

return aResul;
}

    if (isOferta) {
      return frutas.filter(f => f.oferta);
    } else {
      return frutas;
    }
  }
  }

