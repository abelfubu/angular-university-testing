import { getLocaleWeekEndRange } from '@angular/common'
import { TestBed } from '@angular/core/testing'

import { AsyncRxjsService } from './async-rxjs.service'

describe('AsyncRxjsService', () => {
  let service: AsyncRxjsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AsyncRxjsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('Should emit 4 values', done => {
    const result: number[] = []
    const expectedResult = [1, 2, 3, 4]
    service.getRange().subscribe({
      next: v => result.push(v),
      complete: () => {
        expect(result).toEqual(expectedResult)
        done()
      },
    })
  })
})
