import { TestBed } from '@angular/core/testing';

import { GetListRawService } from './get-list-raw.service';

describe('GetListRawService', () => {
  let service: GetListRawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListRawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
