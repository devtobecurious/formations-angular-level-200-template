import { TestBed } from '@angular/core/testing';

import { LogersService } from './logers.service';

describe('LogersService', () => {
  let service: LogersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
