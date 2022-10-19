import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/modelos/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarhabilidad',
  templateUrl: './editarhabilidad.component.html',
  styleUrls: ['./editarhabilidad.component.css']
})
export class EditarhabilidadComponent implements OnInit {

  habilidad: Habilidad = new Habilidad();

  constructor(private habilidadServicio: HabilidadService, private router: Router) { }

  ngOnInit(): void {
    this.editarHabilidad();
  }

  editarHabilidad(){
    let id=localStorage.getItem("id");
    this.habilidadServicio.verHabilidadId(+id).subscribe(
      dato => {
        this.habilidad = dato;
      });
  }
  guardar(habilidad: Habilidad){
    if(this.validar(habilidad)){
      if(habilidad.porcentaje.length < 3 ){
            this.habilidadServicio.editarHabilidad(habilidad).subscribe(
            data => {
                this.habilidad = data;
                this.router.navigate(["habilidad"]);
           });
       }else{
               
                Swal.fire({
                  icon: 'error',
                  title: 'Error en el porcentaje!',
                  text: 'Cantidad menor a dos cifras.',
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
  
    validar(habilidad: Habilidad){
      if(habilidad.habilidad!=='' && habilidad.porcentaje!==''){
            return true;
      }
      else{
          return false;
      }    
    }
}
