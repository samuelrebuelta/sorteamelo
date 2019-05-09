import { Component, OnDestroy, OnInit } from '@angular/core';
import { Participante } from '../../models/participante.model';
import { interval, Subscription } from 'rxjs';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.scss']
})
export class SorteoComponent implements OnInit, OnDestroy {

  participantesSubscription = new Subscription();
  intervaloSubscription = new Subscription();

  participantesSorteo: Array<Participante> = [];
  numeroParticipantes: number;
  resultadoSorteo: Array<Participante> = [];

  constructor(
    private appService: AppService
  ) {
    this.appService.participantes$.subscribe((res: Array<Participante>) => this.participantesSorteo = res);
    this.appService.numeroParticipantes$.subscribe((res: number) => {
      this.numeroParticipantes = res;
      this.vaciar();
    });
  }

  ngOnInit() {
    this.intervaloSubscription.closed = true;
    this.numeroParticipantes = this.appService.numeroParticipantesSource.getValue();
  }

  sortear() {
    if (this.intervaloSubscription.closed && this.resultadoSorteo.length < this.participantesSorteo.length) {
      const intervalo = interval(500);
      this.intervaloSubscription = intervalo.subscribe(() => {
        const equiposSorteoFiltered = this.participantesSorteo.filter(elem => this.resultadoSorteo.indexOf(elem) === -1);
        const equipoRandom = equiposSorteoFiltered[Math.floor(Math.random() * equiposSorteoFiltered.length)];
        this.resultadoSorteo.push(equipoRandom);
        if (this.resultadoSorteo.length >= this.participantesSorteo.length) { this.intervaloSubscription.unsubscribe(); }
      });
    } else {
      this.intervaloSubscription.unsubscribe();
    }
  }

  vaciar() {
    this.resultadoSorteo = [];
    this.intervaloSubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.participantesSubscription.unsubscribe();
    this.intervaloSubscription.unsubscribe();
  }
}
