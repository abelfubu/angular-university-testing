import { Component, Input } from '@angular/core'

@Component({
  selector: 'au-test-button',
  template: ` <button [type]="type" [ngClass]="color">
    <ng-content></ng-content>
  </button>`,
  styles: [
    `
      @use "colors";
      button {
        padding: 0.3rem 0.8rem;
        border-radius: 8px;
        font-size: inherit;
        cursor: pointer;
        border: 3px solid transparent;
      }

      .primary {
        background-color: map-get(colors.$primary, 400a);
        color: #fff;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: map-get(colors.$primary, 400);
        }
      }

      .secondary {
        border-color: map-get(colors.$primary, 400);
        background-color: map-get(colors.$dark, 400);
        color: #fff;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: map-get(colors.$dark, 400);
        }
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() type = 'button'
  @Input() color: 'primary' | 'secondary' | 'outline' = 'primary'
}
