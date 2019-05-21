import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddParticipanteComponent } from './ajustes-torneo.component';

describe('FormAddParticipanteComponent', () => {
  let component: FormAddParticipanteComponent;
  let fixture: ComponentFixture<FormAddParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
