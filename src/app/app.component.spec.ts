import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { DataService } from './services/data.service'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    const dataService = jasmine.createSpyObj('DataService', ['get'])
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      providers: [{ provide: DataService, useValue: dataService }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    component.todos$ = of([])
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  it('should render title', () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('ABELFUBU')
  })
})
