import { Component, computed, inject, input, resource } from '@angular/core'
import { ButtonsComponent } from '@components/buttons/buttons.component'
import { users } from '@routes/basic/data/users'
import { find } from 'lodash-es'
import { IUser } from '@interfaces/i-user'
import { UserComponent } from '@components/user/user.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-basic',
  imports: [
    ButtonsComponent,
    UserComponent,
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
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
    this.router.navigateByUrl(`/basic/${idx}`).then()
  }
}
