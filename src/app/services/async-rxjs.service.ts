import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { delay, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AsyncRxjsService {
  constructor() {}

  getRange() {
    return of(0, 1, 2, 3).pipe(
      delay(500),
      map(x => x + 1),
    )
  }
}
