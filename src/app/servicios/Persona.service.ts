import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persona } from '../modelos/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  Url = 'http://localhost:8080/persona/';

  constructor(private httpClient: HttpClient) { }

  public verPersona():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.Url + `vertodas`);
  }

  public buscarPersonaId(id:number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.Url + `buscar/${id}`);
  }
  
  public guardarPersona(persona: Persona):Observable<Persona>{
    return this.httpClient.post<Persona>(this.Url + `crear`, persona);
  }

  public actualizarPersona(persona: Persona): Observable<Persona>{
    return this.httpClient.put<Persona>(this.Url + `editar`, persona);
  }

  public borrarPersona(id: number) {
      this.httpClient.delete<Persona>(this.Url + `borrar/${id}`);
  }
}
