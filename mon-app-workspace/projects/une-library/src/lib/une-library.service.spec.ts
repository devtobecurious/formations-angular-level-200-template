import { TestBed } from '@angular/core/testing';

import { UneLibraryService } from './une-library.service';

describe('UneLibraryService', () => {
  let service: UneLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UneLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
