import { Component, Input } from '@angular/core';
import { SpinnerType } from './spinner.module';

@Component({
  selector: 'spinner',
  styleUrls: ['spinner.component.scss'],
  templateUrl: 'spinner.component.html'
})
export class SpinnerComponent {
  @Input() type: SpinnerType = 'border';
  @Input() sm = false;
}
