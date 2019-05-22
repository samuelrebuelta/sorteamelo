import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Participante } from './models/participante.model';


@Injectable()
export class AppService {

    private participantes: Array<Participante> = [];
    private participantesSource = new Subject();
    participantes$ = this.participantesSource.asObservable();

    numeroParticipantesSource = new BehaviorSubject<number>(4);
    numeroParticipantes$ = this.numeroParticipantesSource.asObservable();

    errorSource = new Subject<any>();
    error$ = this.errorSource.asObservable();

    constructor() { }

    addParticipante(elem) {
        if (elem && elem.nombre) {
            if (this.participantes.find(participante => participante.nombre === elem.nombre)) {
                this.errorSource.next('¡Ya hay un participante con ese nombre!');
            } else {
                this.participantes.push(elem);
            }
            this.participantesSource.next(this.participantes);
        }
    }

    modificarNumeroParticipantes(val: number) {
        this.numeroParticipantesSource.next(val);
    }

    eliminarParticipante(elem) {
        if (elem) {
            this.participantes = this.participantes.filter(element => element.nombre !== elem);
            this.participantesSource.next(this.participantes);
        }
    }
}

