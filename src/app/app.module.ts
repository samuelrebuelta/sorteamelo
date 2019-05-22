import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SorteoComponent } from './components/sorteo/sorteo.component';
import { AppService } from './app.service';
import { ListadoParticipantesComponent } from './components/listado-participantes/listado-participantes.component';
import { AjustesTorneoComponent } from './components/ajustes-torneo/ajustes-torneo.component';
import { NavegacionFooterComponent } from './components/navegacion-footer/navegacion-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SorteoComponent,
    AjustesTorneoComponent,
    ListadoParticipantesComponent,
    NavegacionFooterComponent
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
