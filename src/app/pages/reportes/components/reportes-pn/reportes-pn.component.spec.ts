import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesPnComponent } from './reportes-pn.component';

describe('ReportesPnComponent', () => {
  let component: ReportesPnComponent;
  let fixture: ComponentFixture<ReportesPnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesPnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesPnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
