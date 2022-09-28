import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudios[] = [];

  constructor(private servicioEstudio: EstudiosService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarEstudios();
  }

  mostrarEstudios(){
    this.servicioEstudio.verLosEstudios().subscribe( data => {
        this.estudios = data;
    })
  }
}
