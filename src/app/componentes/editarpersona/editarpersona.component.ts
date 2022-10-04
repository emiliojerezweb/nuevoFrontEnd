import { Component, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona';
import { PersonaService } from 'src/app/servicios/Persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent implements OnInit {

  persona: Persona = new Persona();
  descripcion:string;


  constructor(private personaServicio: PersonaService, 
              private router: Router) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id");
    this.personaServicio.buscarPersonaId(+id).subscribe(
      data => {
        this.persona=data;
        console.log(data);
      });
  }

  guardarMe(persona:Persona){
    if(this.validar(persona)){
      if(this.validarCorreo(persona)){
        if(persona.descripcion.length >= 6){
           this.personaServicio.actualizarPersona(persona).subscribe(
            data => {
                this.persona =data;
                this.router.navigate(["sobremi"]);
           });
          }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Minimo seis caracteres.',
                  text: 'Por favor verificar.',
                })
          }   
        } 
        else{
              Swal.fire({
                icon: 'warning',
                title: 'Correo no valido.',
                text: 'Por favor verificar.',
              })
        } 
      } 
      else 
            Swal.fire({
              icon: 'error',
              title: 'Falta completar algunos datos.',
              text: 'Por favor verificar.',
            })
  }
  
    validar(persona: Persona){
      if(persona.nombre!=='' && persona.apellido!=='' && 
          persona.email!=='' && persona.descripcion!==''){
            return true;
      }
      else{
          return false;
      }    
    }

    validarCorreo(persona:Persona){
      let expresion= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      let esValido = expresion.test(persona.email);
      if(esValido)  
          return true;
      else
        return false;
    }
}
