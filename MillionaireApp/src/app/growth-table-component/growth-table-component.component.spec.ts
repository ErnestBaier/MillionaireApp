import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthTableComponentComponent } from './growth-table-component.component';

describe('GrowthTableComponentComponent', () => {
  let component: GrowthTableComponentComponent;
  let fixture: ComponentFixture<GrowthTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
