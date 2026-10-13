import { TestBed } from '@angular/core/testing';
import { GetListStsAsBusiness } from './get-list-sts-as-business';

describe('GetListStsAsBusiness', () => {
  let service: GetListStsAsBusiness;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListStsAsBusiness);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
