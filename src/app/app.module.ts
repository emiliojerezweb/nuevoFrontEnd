import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobremiComponent,
    EstudiosComponent,
    ExperienciasComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
