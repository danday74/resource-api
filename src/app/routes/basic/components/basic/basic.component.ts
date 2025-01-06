import { Component, computed, inject, input, InputSignal, resource, ResourceRef, Signal } from '@angular/core'
import { ButtonsComponent } from '@components/buttons/buttons.component'
import { UserComponent } from '@components/user/user.component'
import { Router } from '@angular/router'
import { BasicService } from '@routes/basic/services/basic/basic.service'
import { IUser } from '@interfaces/i-user'

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
  paramUid: InputSignal<string> = input<string>(null) // route param

  private uid: Signal<number> = computed<number>((): number => parseInt(this.paramUid(), 10))

  private router: Router = inject(Router)
  private basicService: BasicService = inject(BasicService)

  user: ResourceRef<IUser> = resource({
    request: this.uid,
    loader: this.basicService.basicLoader,
  })

  buttonClick(idx: number) {
    this.router.navigateByUrl(`/basic/${idx}`).then()
  }
}
