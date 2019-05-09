import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SorteoComponent } from './components/sorteo/sorteo.component';
import { AppService } from './app.service';
import { ListadoParticipantesComponent } from './components/listado-participantes/listado-participantes.component';
import { FormAddParticipanteComponent } from './components/form-add-participante/form-add-participante.component';

@NgModule({
  declarations: [
    AppComponent,
    SorteoComponent,
    FormAddParticipanteComponent,
    ListadoParticipantesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
