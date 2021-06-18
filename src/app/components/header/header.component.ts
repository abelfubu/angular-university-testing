import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'au-test-header',
  template: `
    <i class="fas fa-cookie-bite" data-test="logo"></i>
    <span class="icon">
      <input data-test="search" placeholder="Search" />
    </span>
    <nav data-test="menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Prices</li>
        <li>Contact</li>
      </ul>
    </nav>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
