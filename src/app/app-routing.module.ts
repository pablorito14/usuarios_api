import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './pages/editar/editar.component';

import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {path:'',component:ListadoComponent},
  {path: 'agregar-usuario',component:EditarComponent},
  {path: 'editar-usuario/:id',component:EditarComponent},
  {path: '**',pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
