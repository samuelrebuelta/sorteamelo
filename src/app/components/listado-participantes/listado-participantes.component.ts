import { Component, OnInit } from '@angular/core';
import { Participante } from 'src/app/models/participante.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listado-participantes',
  templateUrl: './listado-participantes.component.html',
  styleUrls: ['./listado-participantes.component.scss']
})
export class ListadoParticipantesComponent implements OnInit {

  participantes: Array<Participante> = [];

  constructor(
    private appService: AppService
  ) {
    this.appService.participantes$
      .subscribe((res: Array<Participante>) => this.participantes = res);
  }

  ngOnInit() {
  }

}
