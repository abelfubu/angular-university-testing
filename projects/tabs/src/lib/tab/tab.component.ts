import { Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() title!: string
  @Input() selected = false

  constructor(private elementRef: ElementRef) {}
}
