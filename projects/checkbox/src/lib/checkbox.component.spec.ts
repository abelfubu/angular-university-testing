import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CheckboxComponent } from './checkbox.component'
import { CheckboxModule } from './checkbox.module'

fdescribe('CheckboxComponent', () => {
  let component: CheckboxComponent
  let fixture: ComponentFixture<CheckboxComponent>
  let compiled: any
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have a checked property being false by default', () => {
    expect(component.checked).toBeFalsy()
  })

  it('should mark checked as true when clicking on span', () => {
    const checkbox = compiled.querySelector('span')

    checkbox.click()
    expect(component.checked).toBe(true)
  })

  it('should be mark as disabled', () => {
    expect(component.isDisabled).toBe(false)
    component.setDisabledState(true)
    expect(component.isDisabled).toBe(true)
  })
})
