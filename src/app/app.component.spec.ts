import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { DataService } from './services/data.service'

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
      imports: [RouterTestingModule, AppModule],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
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
})
