import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/modelos/Habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidad[]=[];

  constructor(private habilidadServicio: HabilidadService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarHabilidades();
  } 

  mostrarHabilidades(){
    this.habilidadServicio.verTodasHabilidades().subscribe( data => {
        this.habilidades = data;
    });
  }

  editarHabilidad(habilidad: Habilidad):void{
    localStorage.setItem("id", habilidad.id.toString());
    this.router.navigate(["editarhabilidad"]);
  }

  borrarHabilidad(habilidad: Habilidad){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success',
        cancelButton: 'btn btn-outline-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Estas por eliminar un skill",
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
        this.habilidadServicio.borrarHabilidadId(habilidad.id).subscribe(
          data => {
            this.mostrarHabilidades();
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
        this.mostrarHabilidades();
      }
    })
  }

}
