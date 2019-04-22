import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCounterTwoComponent } from './super-counter-two.component';

describe('SuperCounterTwoComponent', () => {
  let component: SuperCounterTwoComponent;
  let fixture: ComponentFixture<SuperCounterTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCounterTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
