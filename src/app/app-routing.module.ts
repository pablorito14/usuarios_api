import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent as EditarUsuario } from './pages/editar/editar.component';
import { ListadoComponent as Usuarios } from './pages/listado/listado.component';
// HOME
import { HomeComponent as Home } from './home/home/home.component';
import { ListaPreciosComponent } from './home/lista-precios/lista-precios.component';

// PEDIDOS
import { ListadoComponent as Pedidos } from './pedidos/listado/listado.component';
import { NuevoComponent as NuevoPedido } from './pedidos/nuevo/nuevo.component';
import { EditarComponent as EditarPedido } from './pedidos/editar/editar.component';
// SERVICIOS
import { ListadoComponent as Servicios } from './servicios/listado/listado.component';
import { GuardarComponent as GuardarPedido, GuardarComponent } from './servicios/guardar/guardar.component';




const routes: Routes = [
  {path: 'listado-usuarios',component:Usuarios},
  {path: 'agregar-usuario',component:EditarUsuario},
  {path: 'editar-usuario/:id',component:EditarUsuario},
  // HOME
  {path: '', component: Home},
  {path: 'servicios',component: ListaPreciosComponent},
  // PEDIDOS
  {path: 'pedidos',component: Pedidos},
  {path: 'nuevo-pedido',component:NuevoPedido},
  {path: 'editar-pedido/:id',component:EditarPedido},

  // SERVICIOS
  // {path: 'servicios',component: Servicios},
  {path: 'servicio/guardar',component:GuardarPedido},
  {path: 'servicio/:accion/:id',component:GuardarPedido},

  {path: '**',pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
