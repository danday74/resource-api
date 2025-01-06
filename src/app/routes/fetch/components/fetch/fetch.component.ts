import { Component, computed, inject, input, InputSignal, resource, ResourceRef, Signal } from '@angular/core'
import { ButtonsComponent } from '@components/buttons/buttons.component'
import { UserComponent } from '@components/user/user.component'
import { IUser } from '@interfaces/i-user'
import { Router } from '@angular/router'
import { FetchService } from '@routes/fetch/services/fetch/fetch.service'

@Component({
  selector: 'app-fetch',
  imports: [
    ButtonsComponent,
    UserComponent,
  ],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.scss',
})
export class FetchComponent {
  paramUid: InputSignal<string> = input<string>(null) // route param

  private uid: Signal<number> = computed<number>((): number => parseInt(this.paramUid(), 10) || null)

  private router: Router = inject(Router)
  private fetchService: FetchService = inject(FetchService)

  user: ResourceRef<IUser> = resource({
    request: this.uid,
    loader: this.fetchService.fetchLoader,
  })

  buttonClick(idx: number) {
    this.router.navigateByUrl(`/fetch/${idx}`).then()
  }
}
