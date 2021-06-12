import { Injectable } from '@angular/core'
import { LoggerService } from './logger.service'

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private logger: LoggerService) {}

  add(num1: number, num2: number): number {
    this.logger.log('Addition operation called')
    return num1 + num2
  }

  subtract(num1: number, num2: number): number {
    this.logger.log('Subtraction operation called')
    return num1 - num2
  }
}
