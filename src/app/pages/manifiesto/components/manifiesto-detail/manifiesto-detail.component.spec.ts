import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoDetailComponent } from './manifiesto-detail.component';

describe('ManifiestoDetailComponent', () => {
  let component: ManifiestoDetailComponent;
  let fixture: ComponentFixture<ManifiestoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifiestoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifiestoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
