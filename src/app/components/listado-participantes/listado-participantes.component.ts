import { Component, OnInit } from '@angular/core';
import { Participante } from 'src/app/models/participante.model';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listado-participantes',
  templateUrl: './listado-participantes.component.html',
  styleUrls: ['./listado-participantes.component.scss']
})
export class ListadoParticipantesComponent implements OnInit {

  participanteFormGroup: FormGroup;
  participantes: Array<Participante> = [];
  numeroParticipantes: number;

  showError = false;

  constructor(
    private appService: AppService,
    private fb: FormBuilder
  ) {
    this.appService.participantes$.subscribe((res: Array<Participante>) => this.participantes = res);
    this.appService.numeroParticipantes$.subscribe(res => this.numeroParticipantes = res);
  }

  ngOnInit() {
    this.participanteFormGroup = this.fb.group({
      nombre: new FormControl(null, [Validators.required])
    });
  }

  addEquipo() {
    if (this.participanteFormGroup.valid && this.numeroParticipantes > this.participantes.length) {
      this.showError = false;
      this.participanteFormGroup.controls['nombre'].setValue(
        this.participanteFormGroup.controls['nombre'].value.replace(/\b\w/g, l => l.toUpperCase()));
      this.appService.addParticipante(this.participanteFormGroup.value);
      this.participanteFormGroup.reset();
    } else if (this.numeroParticipantes === this.participantes.length) {
      this.appService.errorSource.next('¡Participantes máximos alcanzados!');
    }
  }

  eliminarParticipante(equipo) {
    if (equipo) {
      this.appService.eliminarParticipante(equipo);
    }
  }

}
