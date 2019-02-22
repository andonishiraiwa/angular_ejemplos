import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Fruta } from "../model/fruta";

@Injectable({
  providedIn: "root"
})
export class ListafrutasService {
  endpoint: string = "http://localhost:3000/fruta/";

  constructor(private httpClient: HttpClient) {
    console.trace("ListafrutasService, constructor");
  }
  //funcion que muestre todas las frutas

  public getListafrutas(): Observable<any> {
    console.trace(` getListafrutas ${this.endpoint}`);
    //retorna los datos del ya definido endpoint (arriba)
    return this.httpClient.get(this.endpoint);
  }

  public getListafrutasById(id:number): Observable<any> {
    console.trace(` getListafrutas ${this.endpoint}`);
    //retorna los datos del ya definido endpoint (arriba)
    return this.httpClient.get(this.endpoint + id);

   
  }


  public delete(id: number): Observable<any> {
    let url = this.endpoint + id;
    console.trace("delete" + url);
    return this.httpClient.delete(url);
  }

  public crear(fruta: Fruta): Observable<any> {
    let url = this.endpoint; //no se necesita la id para crear
    console.trace("crear" + url);

    let body = {
      nombre: fruta.nombre,
      oferta: fruta.oferta,
      descuento: fruta.descuento,
      precio: fruta.precio,
      imagen: fruta.imagen
      //Falta colores
    };
    return this.httpClient.post(url, body);
  }
}
