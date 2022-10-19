import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearestudioComponent } from './componentes/crearestudio/crearestudio.component';
import { CrearexperienciaComponent } from './componentes/crearexperiencia/crearexperiencia.component';
import { CrearhabilidadComponent } from './componentes/crearhabilidad/crearhabilidad.component';
import { EditarestudioComponent } from './componentes/editarestudio/editarestudio.component';
import { EditarexperienciaComponent } from './componentes/editarexperiencia/editarexperiencia.component';
import { EditarhabilidadComponent } from './componentes/editarhabilidad/editarhabilidad.component';
import { EditarpersonaComponent } from './componentes/editarpersona/editarpersona.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';

const routes: Routes = [
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {path:'portfolio', component:HeaderComponent},
  {path:'sobremi', component:SobremiComponent},
  {path:'estudio', component:EstudiosComponent},
  {path:'experiencia', component:ExperienciasComponent},
  {path:'habilidad', component:HabilidadesComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path: 'editarpersona', component: EditarpersonaComponent},
  {path: 'editarestudio', component: EditarestudioComponent},
  {path: 'crearestudio', component: CrearestudioComponent},
  {path: 'editarexperiencia', component: EditarexperienciaComponent},
  {path: 'crearexperiencia', component:CrearexperienciaComponent},
  {path: 'crearhabilidad', component: CrearhabilidadComponent},
  {path: 'editarhabilidad', component: EditarhabilidadComponent}
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
