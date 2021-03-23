import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosHomeComponent } from './procedimientos-home.component';

describe('ProcedimientosHomeComponent', () => {
  let component: ProcedimientosHomeComponent;
  let fixture: ComponentFixture<ProcedimientosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimientosHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
