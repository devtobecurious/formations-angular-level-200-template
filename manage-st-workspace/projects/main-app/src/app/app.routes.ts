import { Routes } from '@angular/router';
import {stormTroopersRoutes} from './features/storm-troopers/storm-troopers.routes';
import rebelRoutes from './features/rebels/rebels.routes';

export const routes: Routes = [
    {
        path: 'storm-troopers',
        children: [...stormTroopersRoutes]
    },
    {
        path: 'planets',
        loadChildren: () => import('./features/planets/planets.routes')
        //loadComponent: () => import('./features/planets/components/display-planets/display-planets').then(item => item.DisplayPlanets)
    },
    {
        path: 'rebels',
        children: [...rebelRoutes]
    }
];
