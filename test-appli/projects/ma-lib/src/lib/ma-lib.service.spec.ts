import { TestBed } from '@angular/core/testing';

import { MaLibService } from './ma-lib.service';

describe('MaLibService', () => {
  let service: MaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
