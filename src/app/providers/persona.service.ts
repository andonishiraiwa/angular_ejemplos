import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  endpoint = 'http://localhost:3000/persona/';

  constructor(private httpClient: HttpClient){
    console.trace('PersonaService constructor');
   }

   public getAll():Observable<any>{

console.trace();
    return this.httpClient.get(this.endpoint);
   }
}
