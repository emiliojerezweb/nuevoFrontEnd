import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarpersonaComponent } from './componentes/editarpersona/editarpersona.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';

const routes: Routes = [
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {path:'portfolio', component:HeaderComponent},
  {path:'sobremi', component:SobremiComponent},
  {path:'estudio', component:EstudiosComponent},
  {path:'experiencia', component:ExperienciasComponent},
  {path:'habilidad', component:HabilidadesComponent},
  {path: 'editarpersona', component: EditarpersonaComponent}
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
