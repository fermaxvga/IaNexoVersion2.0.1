import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosEditComponent } from './procedimientos-edit.component';

describe('ProcedimientosEditComponent', () => {
  let component: ProcedimientosEditComponent;
  let fixture: ComponentFixture<ProcedimientosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimientosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
