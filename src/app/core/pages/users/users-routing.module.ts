import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component'),
    title: 'admin'
  },
  {
    path: 'productores',
    loadComponent: () => import('./productores/productores.component'),
    title: 'productores'
  },
  {
    path: 'compradores',
    loadComponent: () => import('./compradores/compradores.component'),
    title: 'compradores'
  },
  {
    path: 'transportistas',
    loadComponent: () => import('./transportistas/transportistas.component')
  },
  {
    path: 'logisticos',
    loadComponent: () => import('./transportisticos/transportisticos.component')
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class UsersRoutingModule { }