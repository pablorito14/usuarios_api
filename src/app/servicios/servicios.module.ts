import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { GuardarComponent } from './guardar/guardar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoComponent,
    GuardarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ServiciosModule { }
