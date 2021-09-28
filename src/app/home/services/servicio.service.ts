import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url:string = 'http://localhost/api_istore/servicios';
  api_key:string = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4ifQ.uBLksgABTWd-XGn-TkauyPZcNAfE9SS-L5ZZCOePyIc';
  token_home:string = 'CobzjgBPWU';
  
  constructor(private http:HttpClient) { }

  obtenerServiciosAdmin(){
    const params = new HttpParams().set('api_key',this.api_key).set('q',this.token_home);
    return this.http.get(this.url,{params});
  }
}
