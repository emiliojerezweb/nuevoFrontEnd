import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelos/Estudios';
import { EstudiosService } from 'src/app/servicios/estudios.service';
import Swal from 'sweetalert2';

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

  editarEstudio(estudio: Estudios):void{
    localStorage.setItem("id", estudio.id.toString());
    this.router.navigate(["editarestudio"]);
  }

  borrarEstudio(estudio: Estudios){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-success',
        cancelButton: 'btn btn-outline-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: "Estas por eliminar un estudio",
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
        this.servicioEstudio.borrarEstudioId(estudio.id).subscribe(
          data => {
  
          this.mostrarEstudios();
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
        this.mostrarEstudios();
      }
    })
  }
}
