import { TestBed } from '@angular/core/testing';

import { ContratsService } from './contrats.service';

describe('ContratsService', () => {
  let service: ContratsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
