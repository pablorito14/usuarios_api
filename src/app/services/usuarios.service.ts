import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../pages/interfaces/usuarios.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  api_key:string='eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4ifQ.uBLksgABTWd-XGn-TkauyPZcNAfE9SS-L5ZZCOePyIc';
  url:string=`http://istoreliberaciones.com/api/usuarios`;
  constructor(private http:HttpClient ) { }



  mostrarDatos(){
    const params = new HttpParams()
      .set('api_key',this.api_key);
   return this.http.get(this.url,{params});
  }

  buscarUsuario(id:string):Observable<any>{
    const params = new HttpParams()
      .set('api_key',this.api_key)
      .set('id',id);

    return this.http.get(this.url,{params});
  }

  agregarUsuario(usuario:Usuario):Promise<any>{
    const params = new HttpParams()
      .set('api_key',this.api_key);
    return this.http.post(this.url,usuario,{params}).toPromise();
  }

  actualizarUsuario(id:string,usuario:Usuario):Promise<any>{
    const params = new HttpParams()
      .set('api_key',this.api_key)
      .set('id',id);
    return this.http.put(this.url,usuario,{params}).toPromise();
  }
}


