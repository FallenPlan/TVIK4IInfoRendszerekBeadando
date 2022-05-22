import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgalatPatientComponent } from './vizsgalat-patient.component';

describe('VizsgalatPatientComponent', () => {
  let component: VizsgalatPatientComponent;
  let fixture: ComponentFixture<VizsgalatPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizsgalatPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizsgalatPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
