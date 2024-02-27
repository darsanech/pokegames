import { TestBed } from '@angular/core/testing';

import { CheckweaponService } from './checkweapon.service';

describe('CheckweaponService', () => {
  let service: CheckweaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckweaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
