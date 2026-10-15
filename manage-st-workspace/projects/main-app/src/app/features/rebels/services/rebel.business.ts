import { httpResource } from '@angular/common/http';
import { computed, inject, Service, Signal, signal } from '@angular/core';
import { FromApiResult, Rebel } from '../models/rebel';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Service()
export class RebelBusiness {
    private readonly route = inject(ActivatedRoute);
    private readonly resource = httpResource<FromApiResult>(() => 'https://swapi.dev/api/people');

    //    private readonly rebelId = signal<number>(0);

    private readonly params = toSignal(this.route.params);
    private readonly rebelId = computed(() => {
        const params = this.params();
        let id = 0;

        if (params) {
            id = params['id'];
        }

        return id;
    });

    private readonly oneElementResource = httpResource<Rebel>(() => `https://swapi.dev/api/people/${this.rebelId()}`);

    private readonly rebels = computed(() => this.resource.value()?.results)

    getAll(): Signal<Rebel[] | undefined> {
        return this.rebels;

        // il manque l'id à mapper
    }

    getOne(): Signal<Rebel> {
        return computed(() => {
            let item = this.oneElementResource.value();

            if(item) {
                return item;
            }

            return {height: 0, name: '', id: 0, url: ''};
        });
    }

    isRebelsLoading(): Signal<boolean> {
        return this.resource.isLoading;
    }

    get asResource() {
        return this.resource;
    }

    getNbItems(): Signal<number | undefined> {
        return computed(() => this.rebels()?.length);
    }
}
