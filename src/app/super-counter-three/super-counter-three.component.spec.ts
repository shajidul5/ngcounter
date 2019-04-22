import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCounterThreeComponent } from './super-counter-three.component';

describe('SuperCounterThreeComponent', () => {
  let component: SuperCounterThreeComponent;
  let fixture: ComponentFixture<SuperCounterThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCounterThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
