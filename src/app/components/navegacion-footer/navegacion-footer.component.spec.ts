import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionFooterComponent } from './navegacion-footer.component';

describe('NavegacionFooterComponent', () => {
  let component: NavegacionFooterComponent;
  let fixture: ComponentFixture<NavegacionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
