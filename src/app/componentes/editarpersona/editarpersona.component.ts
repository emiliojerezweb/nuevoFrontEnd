import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona';
import { PersonaService } from 'src/app/servicios/Persona.service';

@Component({
  selector: 'app-editarpersona',
  templateUrl: './editarpersona.component.html',
  styleUrls: ['./editarpersona.component.css']
})
export class EditarpersonaComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private personaServicio: PersonaService, private router: Router) { }

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
    this.personaServicio.actualizarPersona(persona).subscribe(
      data => {
          console.log(data);
          this.persona =data;
          this.router.navigate(["sobremi"]);
      });
  }
}
