import { Component, OnInit } from '@angular/core';
import { EQUIPOS, Equipo } from 'src/app/models/equipos.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form-team-list',
  templateUrl: './form-team-list.component.html',
  styleUrls: ['./form-team-list.component.scss']
})
export class FormTeamListComponent implements OnInit {

  participantes: Array<Equipo> = [];

  constructor(
    private appService: AppService
  ) {
    this.appService.participantes$
      .subscribe((res: Array<Equipo>) => this.participantes = res);
  }

  ngOnInit() {
  }

}
