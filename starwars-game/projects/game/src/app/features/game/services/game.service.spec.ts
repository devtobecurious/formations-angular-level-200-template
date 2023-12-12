import { TestBed } from '@angular/core/testing';

import { GetAllGameService } from './game.service';

describe('GameService', () => {
  let service: GetAllGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
