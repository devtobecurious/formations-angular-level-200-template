import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { CharacterFromApi } from '../models/character';

@Service({ autoProvided: false })
export class GetAllCharacters {
    private readonly resource = httpResource<CharacterFromApi>(
        () => 'https://swapi.dev/api/people',
        {
            parse: (raw) => {
                const response = raw as { results: Array<{ name: string; url: string }> };

                return {
                    results: response.results.map((character) => ({
                        ...character,
                        id: this.extractId(character.url)
                    }))
                };
            }
        }
    );

    get value() {
        return this.resource.value;
    }

    get loading() {
        return this.resource.isLoading;
    }

    private extractId(url: string): number {
        return Number(url.split('/').filter(Boolean).pop());
    }
}
