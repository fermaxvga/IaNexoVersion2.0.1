import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoModifyComponent } from './manifiesto-modify.component';

describe('ManifiestoModifyComponent', () => {
  let component: ManifiestoModifyComponent;
  let fixture: ComponentFixture<ManifiestoModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifiestoModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifiestoModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
