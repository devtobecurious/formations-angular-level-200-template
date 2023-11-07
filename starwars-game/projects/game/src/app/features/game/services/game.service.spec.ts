import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { GameBusiness } from './game.business';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GameBusiness, useValue: {}}
      ]
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
