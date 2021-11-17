import { TestBed } from '@angular/core/testing';

import { ServiceUnService } from './service-un.service';

describe('ServiceUnService', () => {
  let service: ServiceUnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
