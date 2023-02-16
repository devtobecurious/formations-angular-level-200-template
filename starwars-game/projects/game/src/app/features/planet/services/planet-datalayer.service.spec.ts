import { TestBed } from '@angular/core/testing';

import { PlanetDatalayerService } from './planet-datalayer.service';

describe('PlanetDatalayerService', () => {
  let service: PlanetDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetDatalayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
