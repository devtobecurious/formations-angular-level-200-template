import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { StatItemList } from "../../models/stat-item";
import { GetAllStatsContract } from "../get-all-stats.contract";

export class FakeGetAllStatsInfraService implements GetAllStatsContract {
    getAll(): Observable<StatItemList> {
        const data: StatItemList = [
            { year: 2022, month: 1, nbSuccess: 10, nbFail: 5 },
            { year: 2022, month: 2, nbSuccess: 15, nbFail: 3 },
            { year: 2022, month: 3, nbSuccess: 20, nbFail: 2 },
        ];

        return of(data).pipe(delay(1000)); // Simulate a delay of 1 second
    }
}