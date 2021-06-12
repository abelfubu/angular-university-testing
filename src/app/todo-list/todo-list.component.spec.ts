import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { TodoListComponent } from './todo-list.component'
import { By } from '@angular/platform-browser'

describe('TodoListComponent', () => {
  let component: TodoListComponent
  let fixture: ComponentFixture<TodoListComponent>
  let el: DebugElement

  const todos = [
    { id: 1, title: 'Buy food', completed: false },
    { id: 2, title: 'Feed Cat', completed: true },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
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
    const todoTitle = el.query(By.css('h1'))
    const todoInput = el.query(By.css('input'))
    expect(todoTitle.nativeElement.textContent).toBe(todo.title)
    expect(todoInput.nativeElement.checked).toBe(todo.completed)
  })
})
