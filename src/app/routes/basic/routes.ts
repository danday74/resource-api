import { Route } from '@angular/router'
import { BasicComponent } from './components/basic/basic.component'

export const basicRoutes: Route[] = [
  {
    path: ':paramUid',
    component: BasicComponent,
  },
  {
    path: '',
    component: BasicComponent,
  },
]
