import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Equipo } from 'src/app/models/equipos.model';

@Component({
  selector: 'app-form-add-team',
  templateUrl: './form-add-team.component.html',
  styleUrls: ['./form-add-team.component.scss']
})
export class FormAddTeamComponent implements OnInit {

  participanteFormGroup: FormGroup;

  numeroParticipantsFormGroup: FormGroup;
  numeroParticipantes: number;

  comboParticipantes = [4, 8, 16, 32];
  participantes: Array<Equipo>;

  showError = false;
  error: string;

  constructor(
    private fb: FormBuilder,
    private appService: AppService
  ) {
    this.appService.participantes$.subscribe((res: Array<Equipo>) => this.participantes = res);
    this.numeroParticipantes = this.appService.numeroParticipantesSource.getValue();
    this.appService.error$.subscribe(res => {
      this.showError = true;
      this.error = res;
    });
  }

  ngOnInit() {
    this.participanteFormGroup = this.fb.group({
      nombre: new FormControl(null, [Validators.required]),
      pais: new FormControl(null),
      campeonatos: new FormControl(null),
    });
    this.numeroParticipantsFormGroup = this.fb.group({
      numeroParticipantes: new FormControl(this.numeroParticipantes, [Validators.required]),
    });
  }

  addEquipo() {
    this.showError = false;
    this.appService.addParticipante(this.participanteFormGroup.value);
    this.participanteFormGroup.reset();
  }

  modificarNumeroParticipantes(value: string) {
    this.numeroParticipantes = parseFloat(value);
    this.appService.modificarNumeroParticipantes(parseFloat(value));
    this.appService.addParticipante(null);
  }

}
