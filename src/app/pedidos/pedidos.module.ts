import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    ListadoComponent,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
