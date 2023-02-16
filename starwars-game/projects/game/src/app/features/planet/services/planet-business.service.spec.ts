import { TestBed } from '@angular/core/testing';

import { PlanetBusinessService } from './planet-business.service';

describe('PlanetBusinessService', () => {
  let service: PlanetBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
