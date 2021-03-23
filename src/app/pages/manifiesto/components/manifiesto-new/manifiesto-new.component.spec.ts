import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoNewComponent } from './manifiesto-new.component';

describe('ManifiestoNewComponent', () => {
  let component: ManifiestoNewComponent;
  let fixture: ComponentFixture<ManifiestoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifiestoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifiestoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
