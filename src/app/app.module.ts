import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SorteoComponent } from './components/sorteo/sorteo.component';
import { FormAddTeamComponent } from './components/form-add-team/form-add-team.component';
import { FormTeamListComponent } from './components/form-team-list/form-team-list.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SorteoComponent,
    FormAddTeamComponent,
    FormTeamListComponent,
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
