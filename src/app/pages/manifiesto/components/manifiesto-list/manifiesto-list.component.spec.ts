import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoListComponent } from './manifiesto-list.component';

describe('ManifiestoListComponent', () => {
  let component: ManifiestoListComponent;
  let fixture: ComponentFixture<ManifiestoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifiestoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifiestoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
