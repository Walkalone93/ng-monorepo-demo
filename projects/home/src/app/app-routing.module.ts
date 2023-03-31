import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: '',
    redirectTo: 'about-us ',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'about-us',
    pathMatch: 'full'
  },
];