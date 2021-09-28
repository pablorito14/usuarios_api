import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';
registerLocaleData(localeEs);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './pages/editar/editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PedidosModule } from './pedidos/pedidos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    PedidosModule,
    ServiciosModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
