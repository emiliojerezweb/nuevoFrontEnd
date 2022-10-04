import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelos/Estudios';

@Injectable({
  providedIn: 'root'
})

export class EstudiosService {

  Url = 'http://localhost:8080/estudio/';

  constructor(private httpClient: HttpClient) { }

  public verLosEstudios():Observable<Estudios[]>{
    return this.httpClient.get<Estudios[]>(this.Url + `vertodos`);
  }

  public buscarEstudioId(id:number): Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.Url + `buscar/${id}`);
  }
  
  public crearEstudio(estudio: Estudios):Observable<Estudios>{
    return this.httpClient.post<Estudios>(this.Url + `crear`, estudio);
  }

  public editarEstudio(estudio: Estudios): Observable<any>{
    return this.httpClient.put<Estudios>(this.Url + `editar`, estudio);
  }

  public borrarEstudioId(id: number): Observable<any> {
     return this.httpClient.delete<any>(this.Url + `borrar/${id}`);
  }
}
