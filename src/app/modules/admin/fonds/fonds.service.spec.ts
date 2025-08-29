import { TestBed } from '@angular/core/testing';

import { FondsService } from './fonds.service';

describe('FondsService', () => {
  let service: FondsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
