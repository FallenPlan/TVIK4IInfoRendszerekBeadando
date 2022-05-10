import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGetComponent } from './patient-get.component';

describe('PatientGetComponent', () => {
  let component: PatientGetComponent;
  let fixture: ComponentFixture<PatientGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
