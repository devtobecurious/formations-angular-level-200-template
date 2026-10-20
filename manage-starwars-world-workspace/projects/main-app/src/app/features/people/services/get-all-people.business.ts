import { computed, inject, Service, Signal } from '@angular/core';
import { CharacterWithoutUrl } from '../models/character';
import { GetAllPeople } from './get-all-people';
import { toSignal } from '@angular/core/rxjs-interop';

@Service({autoProvided: false})
export class GetAllPeopleBusiness {
  private readonly service = inject(GetAllPeople);
  private readonly resultFromApi = toSignal(this.service.getAll())

  private readonly items = computed(() => {
    const result = this.resultFromApi();

    if(result) {
      return result.results.map(item => ({ name: item.name, height: item.height, id: +item.url.replace('https://swapi.dev/api/people/', '').replace('/', '') }))
    }

    return [];
  })

  getAll(): Signal<CharacterWithoutUrl[]> {
    return this.items;
  }
}
