import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/about-us',
    loadChildren: () => import('../../../home/src/app/pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'home/news',
    loadChildren: () => import('../../../home/src/app/pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'dashboard/charts',
    loadChildren: () => import('../../../dashboard/src/app/pages/charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: '',
    redirectTo: 'home/about-us',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home/about-us',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
