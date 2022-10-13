import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  Url = 'http://localhost:8080/exp/';

  constructor(private httpClient: HttpClient ) { }

  public verLasExperiencias():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.Url + `vertodas`);
  }

  public buscarExperienciasId(id:number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.Url + `buscar/${id}`);
  }
  
  public crearExperiencia(exp: Experiencia):Observable<Experiencia>{
    return this.httpClient.post<Experiencia>(this.Url + `crear`, exp);
  }

  public editarExperiencia(exp: Experiencia): Observable<any>{
    return this.httpClient.put<Experiencia>(this.Url + `editar`, exp);
  }

  public borrarExperienciaId(id: number): Observable<any> {
     return this.httpClient.delete<any>(this.Url + `borrar/${id}`);
  }
}
