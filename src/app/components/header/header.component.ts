import { Component, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'au-test-header',
  template: `
    <i class="fas fa-cookie-bite" data-test="logo"></i>
    <span class="icon">
      <input data-test="search" placeholder="Search" [formControl]="input" />
    </span>
    <nav data-test="menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  input = new FormControl('')
  @Output() search = this.input.valueChanges.pipe(debounceTime(400))

  ngOnInit() {}
}
