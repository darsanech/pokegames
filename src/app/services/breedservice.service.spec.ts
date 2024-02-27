import { TestBed } from '@angular/core/testing';

import { BreedserviceService } from './breedservice.service';

describe('BreedserviceService', () => {
  let service: BreedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
