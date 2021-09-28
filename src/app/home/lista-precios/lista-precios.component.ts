import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categorias.interface';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from '../services/servicio.service';


@Component({
  selector: 'app-lista-precios',
  templateUrl: './lista-precios.component.html',
  styleUrls: ['./lista-precios.component.css']
})
export class ListaPreciosComponent implements OnInit {
  servicios:Servicio[] = []
  categorias:Categoria[] = [];

  filtro_pais:number = 0;
  filtro_busqueda:string = '';

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

  filtrarPaises(pais:string){
    
    this.filtro_pais = parseInt(pais);
  }

  busqueda(param:string){
    
    this.filtro_busqueda = param;
    // console.log(this.servicios);
    let servicios_filtrados:Servicio[] = this.servicios.filter(serv => (serv.str_descripcion.toLowerCase().indexOf(param) != -1 && serv.id_estado_serv != 2));
    

    let filtrados:any[] = [];
    servicios_filtrados.forEach(serv => {
      if(filtrados.indexOf(serv.id_pais) == -1){
        filtrados.push(serv.id_pais);
      }
    }); 

    let tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
      if(table.parentElement){ // card-body
        if(table.parentElement.parentElement){ // card
          let table_id:number = parseInt(table.parentElement.parentElement.id);
          if(!filtrados.includes(table_id)){
            document.getElementById('tabla-servicios-'+table_id)!.style.display = 'none';
          } else {
            document.getElementById('tabla-servicios-'+table_id)!.style.display = 'block';
          }
        }
      }
    })
  }

}
