import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'lib-checkbox',
  template: `
    <span (click)="onClick()">
      <i class="fas fa-check" [ngClass]="checked ? 'fade-in' : 'fade-out'"></i>
    </span>
  `,
  styles: [
    `
      @use "colors";
      @use "animations" as *;

      span {
        display: block;
        width: 1rem;
        height: 1rem;
        border: 3px solid map-get(colors.$primary, 400a);
        border-radius: 6px;
        position: relative;
        cursor: pointer;
        color: map-get(colors.$primary, 400a);
        transition: color 0.1s, background-color 0.1s, border 0.1s;
      }

      i {
        position: absolute;
        font-size: 0.8rem;
        border-radius: 50%;
      }

      span:hover {
        border: 3px solid map-get(colors.$primary, 400);
        color: map-get(colors.$primary, 400);
      }

      .fade-in {
        animation: fade-in 0.2 ease-out;
      }

      .fade-out {
        transform: scale(0);
        animation: fade-in 0.2 ease-out reverse;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() checked = false
  isDisabled = false
  @Output() checkedValue = new EventEmitter()

  private propagateChange!: (checked: boolean) => {}
  private propagateTouched!: () => {}

  writeValue(checked: boolean): void {
    this.checked = checked
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled
  }

  onClick() {
    this.checked = !this.checked
    this.checkedValue.emit(this.checked)

    if (typeof this.propagateChange === 'function') {
      this.propagateChange(this.checked)
    }
  }

  onBlur(): void {
    this.propagateTouched()
  }
}
