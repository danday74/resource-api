import { Route } from '@angular/router'
import { FetchComponent } from './components/fetch/fetch.component'

export const fetchRoutes: Route[] = [
  {
    path: ':paramUid',
    component: FetchComponent,
  },
  {
    path: '',
    component: FetchComponent,
  },
]
