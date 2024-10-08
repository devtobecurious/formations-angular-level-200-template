import { TestBed } from '@angular/core/testing';

import { GetAllGameInfrastructure } from './game.infrastructure';

describe('GameService', () => {
  let service: GetAllGameInfrastructure;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllGameInfrastructure);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
