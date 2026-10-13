import { computed, inject, Service } from '@angular/core';
import { GetListSts } from './get-list-sts';
import { toSignal } from '@angular/core/rxjs-interop';

@Service()
export class GetListStsAsBusiness {
    private readonly service = inject(GetListSts);
    private readonly listAsSignal = toSignal(this.service.getAll());

    getList() {
        return this.listAsSignal;
    }

    // getList() {
    //     return computed(() => this.listAsSignal());
    // }
}
