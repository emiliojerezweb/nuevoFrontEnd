import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';
import Swal from 'sweetalert2';

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
  guardar(estudio:Estudios){
    if(this.validar(estudio)){
      if(estudio.anio_inicio.length == 4){
        if(estudio.anio_fin.length == 4){
            this.estudioServicio.editarEstudio(estudio).subscribe(
            data => {
                this.estudio =data;
                this.router.navigate(["estudio"]);
           });
          }else{
               
                Swal.fire({
                  icon: 'error',
                  title: 'Error en el año final!',
                  text: 'Formato correcto: (YYYY)',
                })
          }   
        } 
        else{
          Swal.fire({
            icon: 'error',
            title: 'Error en el año inicial!',
            text: 'Formato correcto: (YYYY)',
          })
        } 
      } 
      else 
        Swal.fire({
           icon: 'warning',
           title: 'Falta completar algun dato.',
           text: 'Por favor verificar.',
        })
  }
  
    validar(estudio: Estudios){
      if(estudio.titulo!=='' && estudio.lugar!=='' && 
          estudio.anio_inicio!=='' && estudio.anio_fin!==''){
            return true;
      }
      else{
          return false;
      }    
    }
  

}
