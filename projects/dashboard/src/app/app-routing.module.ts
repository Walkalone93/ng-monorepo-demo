import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: '',
    redirectTo: 'charts',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'charts',
    pathMatch: 'full'
  },
];