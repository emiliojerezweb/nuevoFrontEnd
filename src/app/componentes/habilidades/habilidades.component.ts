import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/modelos/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';



@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidad[];

  constructor(private habilidadServicio: HabilidadService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarHabilidades();
  } 

  mostrarHabilidades(){
    this.habilidadServicio.verTodasHabilidades().subscribe( data => {
        this.habilidades = data;
        console.log(data);
    });
  }

}
