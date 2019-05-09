import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddTeamComponent } from './form-add-team.component';

describe('FormAddTeamComponent', () => {
  let component: FormAddTeamComponent;
  let fixture: ComponentFixture<FormAddTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
