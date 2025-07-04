import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'about',
                loadComponent: () => import('./core/pages/about/about.component'),
                title: 'About'
            },
            {
                path: 'users',
                loadComponent: () => import('./core/pages/users/users.component')
            },
            {
                path: 'home',
                loadComponent: () => import('./core/pages/home/home.component'),
                title: 'Home'
            },
        ]
    },
    {
        path: 'users',
        loadChildren: () => import('./core/pages/users/users-routing.module'),
        title: 'users'
    },
    { 
        path: 'notfound', 
        loadComponent: () => import('./core/pages/nofound/nofound.component')
    },
    { path: '**', redirectTo: 'notfound' }
];
