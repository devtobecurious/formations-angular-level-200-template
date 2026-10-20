import { TestBed } from '@angular/core/testing';

import { GameBusinessService } from './game.business.service';
import { SearchStore } from 'design-system';
import { GameService } from './game.service';
import { of } from 'rxjs';

describe('GameBusinessService', () => {
  let service: GameBusinessService;
  let searchStore: SearchStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchStore,
        { provide: GameService, useValue: { getAll() {return of([])}}}
      ]
    });
    service = TestBed.inject(GameBusinessService);
    searchStore = TestBed.inject(SearchStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get empty array of games', () => {
    searchStore.dispatch('');
    const values = service.getAll()()

    expect(values).toBeTruthy(values);
    expect(values.length).toBe(0);
  })
});
