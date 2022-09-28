import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';

@Component({
  selector: 'app-editarestudio',
  templateUrl: './editarestudio.component.html',
  styleUrls: ['./editarestudio.component.css']
})
export class EditarestudioComponent implements OnInit {

  estudio: Estudios = new Estudios();

  constructor(private estudioServicio: EstudiosService, private router: Router) { }

  ngOnInit(): void {
    this.editarEstudio();
  }

  editarEstudio(){
    let id=localStorage.getItem("id");
    this.estudioServicio.buscarEstudioId(+id).subscribe(
      dato => {
        this.estudio = dato;
      });
  }

  guardar(estudio: Estudios){
    this.estudioServicio.editarEstudio(estudio).subscribe( dato =>{
        this.estudio = dato;
        this.router.navigate(["estudios"])
    });
  }
}
