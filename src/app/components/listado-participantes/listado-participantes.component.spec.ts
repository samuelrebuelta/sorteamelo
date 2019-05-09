import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoParticipantesComponent } from './listado-participantes.component';

describe('ListadoParticipantesComponent', () => {
  let component: ListadoParticipantesComponent;
  let fixture: ComponentFixture<ListadoParticipantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoParticipantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
