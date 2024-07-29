import { TestBed } from '@angular/core/testing';

import { GameBusiness } from './game.business';

describe('GameBusinessService', () => {
  let service: GameBusiness;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameBusiness);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
