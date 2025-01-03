import { Component } from '@angular/core'
import { ButtonsComponent } from '@components/buttons/buttons.component'

@Component({
  selector: 'app-basic',
  imports: [
    ButtonsComponent,
  ],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
  buttonClick(idx: number) {
    console.log(idx)
  }
}
