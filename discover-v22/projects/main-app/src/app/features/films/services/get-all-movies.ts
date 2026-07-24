import { httpResource } from '@angular/common/http';
import { computed, inject, Service, Signal } from '@angular/core';
import { FilmsFromApi } from '../models/film';
import { OneCharacterStore } from './one-character-store';

@Service({autoProvided: false})
export class GetAllMovies {
    private readonly characterIdStore = inject(OneCharacterStore);
    private readonly resource = httpResource<FilmsFromApi>(() => 'https://swapi.dev/api/films');

    private readonly filterMovies = computed(() => {
        let result = this.resource.value();
        const characterId = this.characterIdStore.asReadonly();

        if(result && characterId) {
            const cloneResult = {...result};
            cloneResult.results = result.results.filter(film => {
                const filter = film.characters.filter(urlCharacter => urlCharacter === `https://swapi.dev/api/people/${characterId}/`)
                return filter.length > 0;
            })

            cloneResult.count = cloneResult.results.length;

            return cloneResult;
        }

        return result;
    })

    getAllFiltered(): Signal<FilmsFromApi | undefined> {
        return this.filterMovies;
    }

    get value() {
        return this.resource.value;
    }

    get loading() {
        return this.resource.isLoading;
    }
}
