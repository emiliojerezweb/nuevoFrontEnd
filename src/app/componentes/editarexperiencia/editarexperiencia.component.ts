import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit {

  expe: Experiencia = new Experiencia();

  constructor(private router: Router, private experienciaServicio: ExperienciaService) { }

  ngOnInit(): void {
    this.editarExperiencia();
  }

  editarExperiencia(){
    let id=localStorage.getItem("id");
    this.experienciaServicio.buscarExperienciasId(+id).subscribe(
      dato => {
        this.expe = dato;
      });
  }
  guardar(expe: Experiencia){
    if(this.validar(expe)){
      if(expe.fec_inicio.length == 4){
        if(expe.fec_fin.length == 4){
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
          expe.fec_inicio!=='' && expe.fec_fin!=='' && expe.descripcion!==''){
            return true;
      }
      else{
          return false;
      }    
    }

}
