import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesToolbarComponent } from './reportes-toolbar.component';

describe('ReportesToolbarComponent', () => {
  let component: ReportesToolbarComponent;
  let fixture: ComponentFixture<ReportesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
