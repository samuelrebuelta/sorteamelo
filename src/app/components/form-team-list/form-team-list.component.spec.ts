import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeamListComponent } from './form-team-list.component';

describe('FormTeamListComponent', () => {
  let component: FormTeamListComponent;
  let fixture: ComponentFixture<FormTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
