import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  ResourceLoaderParams,
  ResourceRef,
  Signal,
} from '@angular/core'
import { ButtonsComponent } from '@components/buttons/buttons.component'
import { UserComponent } from '@components/user/user.component'
import { Router } from '@angular/router'
import { rxResource } from '@angular/core/rxjs-interop'
import { RxResourceService } from '@routes/rx-resource/services/rx-resource/rx-resource.service'
import { Observable } from 'rxjs'
import { IUser } from '@interfaces/i-user'

@Component({
  selector: 'app-rx-resource',
  imports: [ButtonsComponent, UserComponent],
  templateUrl: './rx-resource.component.html',
  styleUrl: './rx-resource.component.scss',
})
export class RxResourceComponent {
  paramUid: InputSignal<string> = input<string>(null) // route param

  private uid: Signal<number> = computed<number>((): number => parseInt(this.paramUid(), 10) || null)

  private router: Router = inject(Router)
  private rxResourceService: RxResourceService = inject(RxResourceService)

  user: ResourceRef<IUser> = rxResource({
    request: this.uid,
    loader: (params: ResourceLoaderParams<number>): Observable<IUser> => this.rxResourceService.rxResourceLoader(params),
  })

  buttonClick(idx: number) {
    this.router.navigateByUrl(`/rx-resource/${idx}`).then()
  }
}
