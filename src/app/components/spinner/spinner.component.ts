import { Component } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'awa-spinner',
  template: `
    <div>
      <i class="fa fa-circle-o-notch fa-spin fa-3x spinner"></i> 
      <p>{{displayText}}</p>
    </div>
  `,
  styles: [`
    i {
      padding: 0 10px;
    }

    p {
      font-size: 45px;
      font-weight: 100;
    }
  `]
})
export class SpinnerComponent {
  @Input() displayText: string;
}
