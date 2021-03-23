import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesScrapAuxComponent } from './reportes-scrap-aux.component';

describe('ReportesScrapAuxComponent', () => {
  let component: ReportesScrapAuxComponent;
  let fixture: ComponentFixture<ReportesScrapAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesScrapAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesScrapAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
