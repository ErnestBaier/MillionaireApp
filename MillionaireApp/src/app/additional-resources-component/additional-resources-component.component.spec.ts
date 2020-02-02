import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalResourcesComponentComponent } from './additional-resources-component.component';

describe('AdditionalResourcesComponentComponent', () => {
  let component: AdditionalResourcesComponentComponent;
  let fixture: ComponentFixture<AdditionalResourcesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalResourcesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalResourcesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
