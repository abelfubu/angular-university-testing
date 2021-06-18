import { Component, OnInit, Input } from '@angular/core'
import { Todo } from '@models/todo'

@Component({
  selector: 'au-test-todo-list',
  template: `
    <div *ngFor="let todo of todos">
      <input type="checkbox" [checked]="todo.completed" />
      <h1>{{ todo.title }}</h1>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        align-items: center;
      }

      input {
        transform: scale(2) translateY(2px);
        margin-right: 1rem;
      }
    `,
  ],
})
export class TodoListComponent implements OnInit {
  @Input() todos!: Todo[]

  constructor() {}

  ngOnInit(): void {}
}
