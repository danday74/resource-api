import { Component, computed, input, InputSignal, output, OutputEmitterRef, Signal } from '@angular/core'
import { range } from 'lodash-es'

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  buttonCount: InputSignal<number> = input<number>(3)

  buttons: Signal<number[]> = computed((): number[] => range(1, this.buttonCount() + 1))

  buttonClick: OutputEmitterRef<number> = output<number>()

  emit(idx: number) {
    this.buttonClick.emit(idx)
  }
}
