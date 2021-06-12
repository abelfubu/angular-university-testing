import { CalculatorService } from './calculator.service'
import { TestBed } from '@angular/core/testing'
import { LoggerService } from './logger.service'

describe(CalculatorService.name, () => {
  let calculator: CalculatorService
  let loggerSpy: { log: () => void }

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])
    TestBed.configureTestingModule({
      providers: [{ provide: LoggerService, useValue: loggerSpy }],
    })
    calculator = TestBed.inject(CalculatorService)
  })

  it('should be created', () => {
    expect(calculator).toBeTruthy()
  })

  it('Should add two numbers', () => {
    const result = calculator.add(2, 2)
    expect(result).toBe(4)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  })

  it('Should subtract two numbers', () => {
    const result = calculator.subtract(2, 2)
    expect(result).toBe(0)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  })
})
