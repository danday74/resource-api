import { Route } from '@angular/router'
import { RxResourceComponent } from '@routes/rx-resource/components/rx-resource/rx-resource.component'

export const rxResourceRoutes: Route[] = [
  {
    path: ':paramUid',
    component: RxResourceComponent,
  },
  {
    path: '',
    component: RxResourceComponent,
  },
]
