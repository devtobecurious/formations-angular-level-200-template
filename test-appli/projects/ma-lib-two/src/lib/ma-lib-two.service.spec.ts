import { TestBed } from '@angular/core/testing';

import { MaLibTwoService } from './ma-lib-two.service';

describe('MaLibTwoService', () => {
  let service: MaLibTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaLibTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
