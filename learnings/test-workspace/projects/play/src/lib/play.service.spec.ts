import { TestBed } from '@angular/core/testing';

import { PlayService } from './play.service';

describe('PlayService', () => {
  let service: PlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
