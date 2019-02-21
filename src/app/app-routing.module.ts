import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClickerComponent } from './components//clicker/clicker.component';
import { Error404Component } from './components/error404/error404.component';
import { SaludarComponent } from './components/saludar/saludar.component';
import { PaginaDirectivaComponent } from './components/pagina-directiva/pagina-directiva.component';
import { FlujoComponent } from './components/flujo/flujo.component';
import { PaginaPipeComponent } from './components/pagina-pipe/pagina-pipe.component';
import { ArrayComponent } from './components/array/array.component';
import { PaginaComparadorComponent } from './components/pagina-comparador/pagina-comparador.component';
import { CochesComparadorComponent } from './components/coches-comparador/coches-comparador.component';
import { ArrayCochesComponent } from './components/array-coches/array-coches.component';
import { PaginaServiceComponent } from './components/pagina-service/pagina-service.component';
import { PaginaFrutasComponent } from './components/pagina-frutas/pagina-frutas.component';
import { PaginaTareasComponent } from './components/pagina-tareas/pagina-tareas.component';
import {PaginaPersonasComponent} from './components/pagina-personas/pagina-personas.component';
import { PaginaListafrutasComponent } from './components/pagina-listafrutas/pagina-listafrutas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/:repeticiones', component: AboutComponent },
  { path: 'juego', component: ClickerComponent },
  { path: '404', component: Error404Component },
  { path: 'saludar', component: SaludarComponent },
  { path: 'pipe', component: PaginaPipeComponent },
  { path: 'directiva', component: PaginaDirectivaComponent },
  { path: 'flujo', component: FlujoComponent },
  { path: 'array', component: ArrayComponent },
  { path: 'comparador', component: PaginaComparadorComponent },
  { path: 'coches-comparador', component: CochesComparadorComponent },
  { path: 'coches', component: ArrayCochesComponent },
  { path: 'service', component: PaginaServiceComponent },
  { path: 'frutas', component: PaginaFrutasComponent },
  { path: 'todos', component: PaginaTareasComponent},
  { path: 'persona', component: PaginaPersonasComponent},
  { path: 'listafrutas', component: PaginaListafrutasComponent},

  //Este tiene que ir siempre abajo, si no redirecciona a home todo lo que tiene debajo
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
