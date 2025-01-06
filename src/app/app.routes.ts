import { Routes } from '@angular/router'
import { LayoutMainComponent } from '@layouts/layout-main/layout-main.component'

export const routes: Routes = [
  {
    path: 'basic',
    component: LayoutMainComponent,
    loadChildren: () => import('./routes/basic/routes').then((mod) => mod.basicRoutes),
  },
  {
    path: 'fetch',
    component: LayoutMainComponent,
    loadChildren: () => import('./routes/fetch/routes').then((mod) => mod.fetchRoutes),
  },
  {
    path: 'rx-resource',
    component: LayoutMainComponent,
    loadChildren: () => import('./routes/rx-resource/routes').then((mod) => mod.rxResourceRoutes),
  },
  {
    path: '**',
    redirectTo: '/basic',
  },
]
