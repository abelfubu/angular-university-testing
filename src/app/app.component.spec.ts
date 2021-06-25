import { Location, LocationStrategy } from '@angular/common'
import { MockLocationStrategy, SpyLocation } from '@angular/common/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { RouterOutlet } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderComponent } from '@components/header/header.component'
import { CheckboxModule } from 'projects/checkbox/src/public-api'
import { TabsModule } from 'projects/tabs/src/public-api'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'
import { AppComponent } from './app.component'
import { DataService } from './services/data.service'
import { TodoListComponent } from './todo-list/todo-list.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let compiled: any
  let dataServiceSpy: any

  const todos = of([
    { id: 1, title: 'Buy food', completed: false },
    { id: 2, title: 'Feed Cat', completed: true },
  ])

  beforeEach(async () => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['get'])
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        TabsModule,
        CheckboxModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: Location, useClass: SpyLocation },
        { provide: DataService, useValue: dataServiceSpy },
        { provide: LocationStrategy, useClass: MockLocationStrategy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
    dataServiceSpy.get.and.returnValue(todos)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  it('should render title', () => {
    expect(compiled.querySelector('h1').textContent).toContain('ABELFUBU')
  })

  it('should render tabs and a list of todos', () => {
    expect(compiled.querySelector('lib-tab-group')).toBeTruthy()
    expect(compiled.querySelectorAll('lib-tab').length).toEqual(3)
  })

  it('Should display content when tab is clicked', () => {
    const tab = compiled.querySelectorAll('lib-tab-group li')
    tab[1].click()
    fixture.detectChanges()
    expect(compiled.querySelectorAll('h1')[1].textContent).toEqual('Good bye')
  })

  it('Should test an observable', fakeAsync(() => {
    let test = false
    const test$ = of(test).pipe(delay(500))
    test$.subscribe(() => (test = true))
    tick(500)
    expect(test).toBeTrue()
  }))

  it('should have a router outlet', () => {
    const el = fixture.debugElement.query(By.directive(RouterOutlet))
    const router = compiled.querySelector('router-outlet')
    expect(router).toBeTruthy()
    expect(el).toBeTruthy()
  })
})
