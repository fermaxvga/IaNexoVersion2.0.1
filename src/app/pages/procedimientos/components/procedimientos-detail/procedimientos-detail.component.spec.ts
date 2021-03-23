import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosDetailComponent } from './procedimientos-detail.component';

describe('ProcedimientosDetailComponent', () => {
  let component: ProcedimientosDetailComponent;
  let fixture: ComponentFixture<ProcedimientosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimientosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
