import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/Habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  Url = 'http://localhost:8080/habilidad/';

  constructor(private httpClient : HttpClient) { }

  public verTodasHabilidades():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.Url + `vertodas`);
  }

  public verHabilidadId(id:number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.Url + `buscar/${id}`);
  }
  
  public crearHabilidad(habilidad: Habilidad):Observable<Habilidad>{
    return this.httpClient.post<Habilidad>(this.Url + `crear`, habilidad);
  }

  public editarHabilidad(habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<Habilidad>(this.Url + `editar`, habilidad);
  }

  public borrarHabilidadId(id: number): Observable<any> {
     return this.httpClient.delete<any>(this.Url + `borrar/${id}`);
  }
}
