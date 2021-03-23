import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosToolbarComponent } from './procedimientos-toolbar.component';

describe('ProcedimientosToolbarComponent', () => {
  let component: ProcedimientosToolbarComponent;
  let fixture: ComponentFixture<ProcedimientosToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimientosToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientosToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
