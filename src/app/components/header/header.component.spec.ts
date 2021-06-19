import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have a logo', () => {
    const logo = fixture.nativeElement.querySelector('[data-test="logo"]')
    expect(logo).toBeTruthy()
  })

  it('should have a search field', () => {
    const search = fixture.nativeElement.querySelector('[data-test="search"]')
    expect(search).toBeTruthy()
  })

  it('should have a menu', () => {
    const menu = fixture.nativeElement.querySelector('[data-test="menu"]')
    expect(menu).toBeTruthy()
  })
})
