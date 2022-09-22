import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona';
import { PersonaService } from 'src/app/servicios/Persona.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  personas: Persona[]=[];


  constructor(private personaServicio : PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.personaServicio.verPersona().subscribe(
      dato =>{
       this.personas = dato;
        console.log(this.personas);
    });
  }

  editarPersona(persona:Persona):void{

    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editarpersona"]);
  }
}
