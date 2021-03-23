import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoHomeComponent } from './manifiesto-home.component';

describe('ManifiestoHomeComponent', () => {
  let component: ManifiestoHomeComponent;
  let fixture: ComponentFixture<ManifiestoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifiestoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifiestoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
