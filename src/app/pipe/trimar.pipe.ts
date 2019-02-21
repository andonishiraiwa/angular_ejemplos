import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimar'
})
export class TrimarPipe implements PipeTransform {

  /**
   * Pipe que elimina espacios en blanco y los sustituye por uno delante, detras y entre todas las palabras de una cadena
   * @param cadena 
   * 
   */
  transform(cadena: string): string {

    return cadena.replace(/ +(?= )/g, '').trim();

  }

}
