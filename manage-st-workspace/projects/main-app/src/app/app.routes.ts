import { Routes } from '@angular/router';
import { stormTroopersRoutes } from './features/storm-troopers/storm-troopers.routes';

export const routes: Routes = [
    {
        path: 'storm-troopers',
        children: [...stormTroopersRoutes]
    }
];
