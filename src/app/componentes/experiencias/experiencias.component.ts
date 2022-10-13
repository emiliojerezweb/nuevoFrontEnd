import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {


  experiencias: Experiencia[]=[];

  constructor(private router: Router, private experienciaServicio: ExperienciaService) { }

  ngOnInit(): void {
    this.mostrarExperiencias();
  }

  mostrarExperiencias(){
    this.experienciaServicio.verLasExperiencias().subscribe(
      dato => {
        this.experiencias = dato;
      });
  }

  editarExperiencia(expe: Experiencia):void{
    localStorage.setItem("id", expe.id.toString());
    this.router.navigate(["editarexperiencia"]);
  }

  borrarExperiencia(expe: Experiencia){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success',
        cancelButton: 'btn btn-outline-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Estas por eliminar una experiencia laboral",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: ' Borrar el registro ',
      cancelButtonText: ' Cancelar ',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Borrado!',
          'Se elimino el registro.',
          'success'
        )
        this.experienciaServicio.borrarExperienciaId(expe.id).subscribe(
          data => {
  
          this.mostrarExperiencias();
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'No se elimino el registro.',
          'error'
        )
        this.mostrarExperiencias();
      }
    })
  }

}

