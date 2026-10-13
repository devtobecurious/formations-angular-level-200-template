import { TestBed } from '@angular/core/testing';
import { GetListSts } from './get-list-sts';

describe('GetListSts', () => {
  let service: GetListSts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListSts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
