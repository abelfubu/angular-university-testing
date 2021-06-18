import { Component } from '@angular/core'
import { DataService } from './services/data.service'

@Component({
  selector: 'au-test-root',
  template: `<au-test-header></au-test-header>
    <div class="container">
      <h1>ABELFUBU</h1>
      <ng-container *ngIf="todos$ | async as todos">
        <lib-tab-group>
          <lib-tab title="Todos">
            <au-test-todo-list [todos]="todos"></au-test-todo-list>
          </lib-tab>
          <lib-tab title="Tab2">
            <h1>Good bye</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              minus molestias ipsam maxime.
            </p>
          </lib-tab>
          <lib-tab title="Tab3">
            <h1>Esto es tab 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              est at voluptas.
            </p>
          </lib-tab>
        </lib-tab-group>
      </ng-container>
      <router-outlet></router-outlet>
    </div> `,
  styles: [
    `
      .container {
        display: block;
        padding: 2rem 8vw;
      }
    `,
  ],
})
export class AppComponent {
  todos$ = this.dataService.get()

  constructor(private dataService: DataService) {}
}
