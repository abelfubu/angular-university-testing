import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { TodoListComponent } from './todo-list.component'
import { By } from '@angular/platform-browser'
import { CheckboxModule } from 'projects/checkbox/src/public-api'

describe('TodoListComponent', () => {
  let component: TodoListComponent
  let fixture: ComponentFixture<TodoListComponent>
  let el: DebugElement

  const todos = [
    { id: 1, title: 'Buy Food', completed: false },
    { id: 2, title: 'Feed Cat', completed: true },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [CheckboxModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
    fixture.detectChanges()
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should have a card for every todo', () => {
    component.todos = todos
    fixture.detectChanges()
    const cards = el.queryAll(By.css('div'))
    expect(cards).toBeTruthy()
    expect(cards.length).toBe(2)
  })

  it('Should render the first todo', () => {
    component.todos = todos
    fixture.detectChanges()
    const [todo] = todos
    const todoTitle = el.query(By.css('p'))
    // const todoInput = el.query(By.css('lib-checkbox'))
    expect(todoTitle.nativeElement.textContent).toBe(todo.title)
    // expect(todoInput.nativeElement.checked).toBe(todo.completed)
  })
})
