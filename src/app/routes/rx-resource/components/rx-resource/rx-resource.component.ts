import { Component, computed, inject, input, resource } from '@angular/core'
import { ButtonsComponent } from '@components/buttons/buttons.component'
import { UserComponent } from '@components/user/user.component'
import { IUser } from '@interfaces/i-user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-rx-resource',
  imports: [
    ButtonsComponent,
    UserComponent,
  ],
  templateUrl: './rx-resource.component.html',
  styleUrl: './rx-resource.component.scss',
})
export class RxResourceComponent {
  paramUid = input<string>(null) // route param

  private uid = computed<number>(() => parseInt(this.paramUid(), 10) || null)

  user = resource({
    request: this.uid,
    loader: async ({ request: uid, abortSignal }) => {
      if (uid == null) return Promise.resolve(null)
      const res = await fetch(`https://dummyjson.com/users/${uid}?delay=2000`, { signal: abortSignal })
      return await res.json() as Promise<IUser>
    },
  })

  private router = inject(Router)

  buttonClick(idx: number) {
    this.router.navigateByUrl(`/rx-resource/${idx}`).then()
  }
}
