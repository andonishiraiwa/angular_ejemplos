import { Component, OnInit } from "@angular/core";
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: "app-pagina-service",
  templateUrl: "./pagina-service.component.html",
  styleUrls: ["./pagina-service.component.scss"]
})
export class PaginaServiceComponent implements OnInit {
frutas:Fruta[];


  constructor(private frutaService: FrutaService) {

    console.trace();
    this.frutas=[];

    
  }

  ngOnInit() {

    console.trace('PaginaServiceComponent ngOnInit');
    //realizar llamada servicio

    this.frutaService.getAll().subscribe(json =>{
console.debug("recibimos los datos de json: %o", json);

      //TODO mapear
      this.frutas=json.map(f=>{

        return new Fruta(f.nombre,f.precio,f.id,f.oferta,f.descuento,f.imagen,1);

      });
    });

  }
}
