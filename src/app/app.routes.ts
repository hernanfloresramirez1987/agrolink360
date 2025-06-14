import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./core/pages/home/home.component'),
        title: 'Home'
    },
    { path: '**', redirectTo: '/notfound' }
];
