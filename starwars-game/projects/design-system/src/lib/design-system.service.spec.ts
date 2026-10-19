import { TestBed } from '@angular/core/testing';

import { DesignSystemService } from './design-system.store';

describe('DesignSystemService', () => {
  let service: DesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
