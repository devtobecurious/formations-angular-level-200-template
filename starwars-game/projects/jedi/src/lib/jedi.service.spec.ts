import { TestBed } from '@angular/core/testing';

import { JediService } from './jedi.service';

describe('JediService', () => {
  let service: JediService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JediService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
