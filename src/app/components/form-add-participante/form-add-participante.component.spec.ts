import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddParticipanteComponent } from './form-add-participante.component';

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
