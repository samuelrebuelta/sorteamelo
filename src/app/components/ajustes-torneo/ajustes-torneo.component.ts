import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-ajustes-torneo',
  templateUrl: './ajustes-torneo.component.html',
  styleUrls: ['./ajustes-torneo.component.scss']
})
export class AjustesTorneoComponent implements OnInit {

  numeroParticipantsFormGroup: FormGroup;
  numeroParticipantes: number;

  comboParticipantes = [1, 4, 8, 16, 32];

  showError = false;
  error: string;

  constructor(
    private fb: FormBuilder,
    private appService: AppService
  ) {
    this.numeroParticipantes = this.appService.numeroParticipantesSource.getValue();

    this.appService.error$.subscribe(res => {
      this.showError = true;
      this.error = res;
      setTimeout(() => {
        this.showError = false;
      }, 4000);
    });
  }

  ngOnInit() {
    this.numeroParticipantsFormGroup = this.fb.group({
      numeroParticipantes: new FormControl(this.numeroParticipantes, [Validators.required]),
    });
  }

  modificarNumeroParticipantes(value: string) {
    this.numeroParticipantes = parseFloat(value);
    this.appService.modificarNumeroParticipantes(parseFloat(value));
  }

}
