import { TestBed } from '@angular/core/testing';

import { ManifiestoService } from './manifiesto.service';

describe('ManifiestoService', () => {
  let service: ManifiestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManifiestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
