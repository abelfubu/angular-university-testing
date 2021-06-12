import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(text: string): void {
    console.log(text)
  }
}
