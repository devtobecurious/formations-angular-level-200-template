import { TestBed } from '@angular/core/testing';

import { ProfilBusinessService } from './profil-business.service';

describe('ProfilBusinessService', () => {
  let service: ProfilBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
