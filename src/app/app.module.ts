import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Nuestros componentes
import { PruebaComponent } from './components/prueba/prueba.component';
import { OtraComponent } from './components/otra/otra.component';
import { ClickerComponent } from './components//clicker/clicker.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Error404Component } from './components/error404/error404.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { PaginaDirectivaComponent } from './components/pagina-directiva/pagina-directiva.component';


//directives
import { Directiva1Directive } from './directives/directiva1.directive';
import { CountdownDirective } from './directives/countdown.directive';
import { FlujoComponent } from './components/flujo/flujo.component';
import { PaginaPipeComponent } from './components/pagina-pipe/pagina-pipe.component';
import { MonedaPipe } from './pipe/moneda.pipe';
import { TrimarPipe } from './pipe/trimar.pipe';
import { ArrayComponent } from './components/array/array.component';
import { FiltroOfertaPipe } from './pipe/filtro-oferta.pipe';
import { PaginaComparadorComponent } from './components/pagina-comparador/pagina-comparador.component';
import { CardFrutaComponent } from './components/card-fruta/card-fruta.component';
import { CardCocheComponent } from './components/card-coche/card-coche.component';
import { CochesComparadorComponent } from './components/coches-comparador/coches-comparador.component';
import { ArrayCochesComponent } from './components/array-coches/array-coches.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PaginaServiceComponent } from './components/pagina-service/pagina-service.component';
import { PaginaPersonasComponent } from './components/pagina-personas/pagina-personas.component';

import { PaginaTareasComponent } from './components/pagina-tareas/pagina-tareas.component';
import { PaginaFrutasComponent } from './components/pagina-frutas/pagina-frutas.component';
import { PaginaListafrutasComponent } from './components/pagina-listafrutas/pagina-listafrutas.component';
import { AlertaComponent } from './components/alerta/alerta.component';



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    OtraComponent,
    ClickerComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    SaludarComponent,
    PaginaDirectivaComponent,
    Directiva1Directive,
    CountdownDirective,
    FlujoComponent,
    PaginaPipeComponent,
    MonedaPipe,
    TrimarPipe,
    ArrayComponent,
    FiltroOfertaPipe,
    PaginaComparadorComponent,
    CardFrutaComponent,
    CardCocheComponent,
    CochesComparadorComponent,
    ArrayCochesComponent,
    TraductorComponent,
    CarritoComponent,
    PaginaServiceComponent,
    PaginaPersonasComponent,
    PaginaTareasComponent,
    PaginaFrutasComponent,
    PaginaListafrutasComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //modulo obligatorio para utilizar BananaInBox
    HttpClientModule, //modulo obligatorio Para usarlo con los services
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
