import { Service, signal } from '@angular/core';

@Service()
export class OneCharacterStore {
    private readonly characterId = signal<number | undefined>(undefined);

    dispatch(id: number) {
        this.characterId.set(id); //reducing
    }

    get asReadonly() {
        return this.characterId.asReadonly(); // selector
    }
}
