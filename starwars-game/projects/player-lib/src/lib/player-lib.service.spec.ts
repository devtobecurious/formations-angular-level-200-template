import { TestBed } from '@angular/core/testing';

import { PlayerLibService } from './player-lib.service';

describe('PlayerLibService', () => {
  let service: PlayerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
