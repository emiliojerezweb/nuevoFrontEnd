import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { PersonaService } from './servicios/Persona.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EditarpersonaComponent } from './componentes/editarpersona/editarpersona.component';
import { EditarestudioComponent } from './componentes/editarestudio/editarestudio.component';
import { CrearestudioComponent } from './componentes/crearestudio/crearestudio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobremiComponent,
    EstudiosComponent,
    ExperienciasComponent,
    HabilidadesComponent,
    EditarpersonaComponent,
    EditarestudioComponent,
    CrearestudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
