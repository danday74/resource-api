import { Component, output } from '@angular/core'

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  buttonClick = output<number>()

  emit(idx: number) {
    this.buttonClick.emit(idx)
  }
}
