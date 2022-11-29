import { TestBed } from '@angular/core/testing';

import { GameBusinessService } from './game-business.service';

describe('GameBusinessService', () => {
  let service: GameBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
