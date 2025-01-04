import { Component, computed, inject, input, resource } from '@angular/core'
import { ButtonsComponent } from '@components/buttons/buttons.component'
import { UserComponent } from '@components/user/user.component'
import { IUser } from '@interfaces/i-user'
import { find } from 'lodash-es'
import { users } from '@routes/basic/data/users'
import { Router } from '@angular/router'

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
  paramUid = input<string>(null) // route param

  private uid = computed<number>(() => parseInt(this.paramUid(), 10))

  user = resource({
    request: this.uid,
    loader: ({ request: uid }) => {
      const user: IUser = find(users, { id: uid })
      return Promise.resolve(user)
    },
  })

  private router = inject(Router)

  buttonClick(idx: number) {
    this.router.navigateByUrl(`/fetch/${idx}`).then()
  }
}
