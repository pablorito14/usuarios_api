import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../interfaces/usuarios.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  titulo:string = 'Agregar usuario';
  id:string | null;
  crearUsuario:FormGroup;
  noResult:boolean = false;
  usuario:Usuario={
    id:0,
    nombre:'',
    apellido:'',
    fechaNacimiento:new Date(),
    pais:''
  };
  constructor(private _svc:UsuariosService, private aRoute:ActivatedRoute,private fb:FormBuilder) {
    
    
    
    this.id = aRoute.snapshot.paramMap.get('id');
    this.crearUsuario = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      fechaNacimiento:['',Validators.required],
      pais:['',Validators.required]
    })
    
  }

  ngOnInit(): void {
    this.buscarUsuario();
  }

  buscarUsuario(){
    if(this.id !== null){
      this.titulo = 'Editar usuario'
      this._svc.buscarUsuario(this.id).subscribe(
        (data:any) => {
          
          if(data.status == 'no-result'){
            this.noResult = true;
          }
          
          // let fecha = new Date().toISOString().slice(0, 10);

          let u:Usuario = data.result;
          
          this.crearUsuario.setValue({
            nombre: u.nombre,
            apellido: u.apellido,
            fechaNacimiento:u.fechaNacimiento,
            pais: u.pais
          });
        }
      )
    }
  }

  agregarEditarUsuario(){
    if(this.crearUsuario.invalid){
      return;
    }

    this.usuario = {
      nombre:this.crearUsuario.value.nombre,
      apellido: this.crearUsuario.value.apellido,
      fechaNacimiento:this.crearUsuario.value.fechaNacimiento,
      pais:this.crearUsuario.value.pais
    }

    // console.log(this.usuario);

    if(this.id === null){
      this._svc.agregarUsuario(this.usuario)
        .then(() => console.log('usuario agregado'))
        .catch(error => console.log(error));
    } else {
      this._svc.actualizarUsuario(this.id,this.usuario)
        .then(() => console.log('usuario actualizado'))
        .catch(error => console.log(error));
  
    }

    // console.log('Agregar usuario');
  }


}
