import { TestBed } from '@angular/core/testing';

import { TetsLibService } from './tets-lib.service';

describe('TetsLibService', () => {
  let service: TetsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TetsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
