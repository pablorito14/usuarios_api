import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPreciosComponent } from './lista-precios/lista-precios.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { PaisPipe } from './pipes/pais.pipe';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    ListaPreciosComponent,
    HomeComponent,
    DetalleServicioComponent,
    PaisPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
