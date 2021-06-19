import { Component, Input } from '@angular/core'
import { Todo } from '@models/todo'

@Component({
  selector: 'au-test-todo-list',
  template: `
    <div *ngFor="let todo of todos">
      <lib-checkbox
        [checked]="todo.completed"
        (checkedValue)="log($event)"
      ></lib-checkbox>
      <p>{{ todo.title | titlecase }}</p>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        align-items: center;
        padding: 0.2rem 0;
      }

      lib-checkbox {
        margin-right: 0.5rem;
      }
    `,
  ],
})
export class TodoListComponent {
  @Input() todos!: Todo[]

  log(event: boolean) {
    console.log(event)
  }
}
