import { Component, computed, input, output } from '@angular/core'
import { range } from 'lodash-es'

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  buttonCount = input<number>(3)

  buttons = computed(() => range(1, this.buttonCount() + 1))

  buttonClick = output<number>()

  emit(idx: number) {
    this.buttonClick.emit(idx)
  }
}
