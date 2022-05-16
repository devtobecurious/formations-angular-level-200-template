import { TestBed } from '@angular/core/testing';

import { TheGameLibService } from './the-game-lib.service';

describe('TheGameLibService', () => {
  let service: TheGameLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheGameLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
