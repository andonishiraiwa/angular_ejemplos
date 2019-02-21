import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListafrutasService {


  endpoint: string = 'http://localhost:3000/fruta';

  

  constructor(private httpClient: HttpClient) {

    console.trace('ListafrutasService, constructor');
  }
    //funcion que muestre todas las frutas

     getListafrutas():Observable<any>{

      console.log(`TodosService getListafrutas ${this.endpoint}`);
      //retorna los datos del ya definido endpoint (arriba)
      return this.httpClient.get(this.endpoint);

    
   }
}
