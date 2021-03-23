import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosNewComponent } from './procedimientos-new.component';

describe('ProcedimientosNewComponent', () => {
  let component: ProcedimientosNewComponent;
  let fixture: ComponentFixture<ProcedimientosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimientosNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
