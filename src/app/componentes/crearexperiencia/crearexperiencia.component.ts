import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearexperiencia',
  templateUrl: './crearexperiencia.component.html',
  styleUrls: ['./crearexperiencia.component.css']
})
export class CrearexperienciaComponent implements OnInit {

  expe: Experiencia = new Experiencia();

  constructor(private experienciaServicio: ExperienciaService, private router: Router) { }

  ngOnInit(): void {

    this.iniciarExp();
  }

  iniciarExp(){
    this.expe.empresa='';
    this.expe.puesto='';
    this.expe.descripcion='';
    this.expe.fec_inicio='';
    this.expe.fec_fin='';
  }

  guardar(expe: Experiencia){
    if(this.validar(expe)){
      if(expe.fec_inicio.length == 4){
        if(expe.fec_fin.length == 4){
          this.expe.imagen = "Logotrabajo.png";
            this.experienciaServicio.editarExperiencia(expe).subscribe(
            data => {
                this.expe = data;
                this.router.navigate(["experiencia"]);
           });
          }else{
               
                Swal.fire({
                  icon: 'error',
                  title: 'Error en la fecha final!',
                  text: 'Formato correcto: (YYYY)',
                })
          }   
        } 
        else{
          Swal.fire({
            icon: 'error',
            title: 'Error en la fecha inicial!',
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
  
  validar(expe: Experiencia){
      if(expe.empresa!=='' && expe.puesto!=='' &&
      expe.descripcion!=='' && expe.fec_inicio!=='' && expe.fec_fin!=='' ){
        return true;
      }
      else{
          return false;
      }    
  }
}
