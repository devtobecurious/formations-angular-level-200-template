import { TestBed } from '@angular/core/testing';

import { GetAllSpeciesService } from './get-all-species.service';

describe('SelectSpeciesService', () => {
  let service: GetAllSpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllSpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
