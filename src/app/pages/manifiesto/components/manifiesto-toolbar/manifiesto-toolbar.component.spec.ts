import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoToolbarComponent } from './manifiesto-toolbar.component';

describe('ManifiestoToolbarComponent', () => {
  let component: ManifiestoToolbarComponent;
  let fixture: ComponentFixture<ManifiestoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifiestoToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifiestoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
