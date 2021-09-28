import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from '../servicio.service';
import { Categoria } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  servicios:Servicio[] = []
  categorias:Categoria[] = [];

  constructor(private svcServicio:ServicioService) { }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(){
    this.svcServicio.obtenerServiciosAdmin().subscribe((data:any) => {
      console.log(data);

      if(data.status == 'ok'){
        this.servicios = data.result.servicios;
        this.categorias = data.result.categorias;

      }
    })
  }

}
