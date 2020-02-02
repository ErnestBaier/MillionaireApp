import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationInfoComponentComponent } from './calculation-info-component.component';

describe('CalculationInfoComponentComponent', () => {
  let component: CalculationInfoComponentComponent;
  let fixture: ComponentFixture<CalculationInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
