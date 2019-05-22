import { Component, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Participante } from 'src/app/models/participante.model';

@Component({
  selector: 'app-navegacion-footer',
  templateUrl: './navegacion-footer.component.html',
  styleUrls: ['./navegacion-footer.component.scss']
})
export class NavegacionFooterComponent {

  @Output() stepChange = new EventEmitter<number>();
  step = 1;
  participantesSorteo: Array<Participante> = [];
  numeroParticipantes: number;

  constructor(
    private appService: AppService
  ) {
    this.appService.participantes$.subscribe((res: Array<Participante>) => this.participantesSorteo = res);
    this.appService.numeroParticipantes$.subscribe((res: number) => this.numeroParticipantes = res);
  }

  nextStep() {
    if (this.step < 3) { this.step++; this.stepChange.emit(this.step); }
  }

  prevStep() {
    if (this.step > 1) { this.step--; this.stepChange.emit(this.step); }
  }

  botonDisabled() {
    if (this.step === 2) {
      if (this.numeroParticipantes === 1) {
        return this.participantesSorteo.length <= 1;
      } else {
        return this.participantesSorteo.length !== this.numeroParticipantes;
      }
    } else {
      return false;
    }
  }

}
