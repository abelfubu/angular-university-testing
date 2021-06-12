import { Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() title!: string
  @Input() selected = false

  constructor(private elementRef: ElementRef) {}
}
