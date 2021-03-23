import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesScrapComponent } from './reportes-scrap.component';

describe('ReportesScrapComponent', () => {
  let component: ReportesScrapComponent;
  let fixture: ComponentFixture<ReportesScrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesScrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
