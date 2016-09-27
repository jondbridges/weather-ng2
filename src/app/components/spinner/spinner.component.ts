import { Component } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'awa-spinner',
  template: `
    <div *ngIf="displayOn">
      <i class="fa fa-circle-o-notch fa-spin fa-3x spinner"></i> 
      <span class="spinner-text">{{displayText}}</span>
    </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input() displayText: string;
  @Input() displayOn: boolean = true;
}
