import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { Usuario } from '../interfaces/usuarios.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios:Usuario[] = [];
  status:string = '';
  result:any | null;
  loading:boolean = false;
  constructor(private _svc:UsuariosService) {
    this.mostrarTodo();
  }

  ngOnInit(): void {
  }
  

  mostrarTodo(){
    this.loading = true;
    this._svc.mostrarDatos().subscribe(
      (data:any) => {
        this.status = data.status;
        this.result = data.result;
        if(data.status == 'ok'){
          this.usuarios = data.result;
        }
        this.loading = false;
      }
      
    );
    
    
  }

}
