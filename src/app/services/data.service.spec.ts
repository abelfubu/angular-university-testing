import { DataService } from './data.service'
import { TestBed } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment'

describe(DataService.name, () => {
  let dataService: DataService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    dataService = TestBed.inject(DataService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it('Should get a list of todos', () => {
    const todo = { id: 1, title: 'Buy Chocolate', completed: false }

    dataService.get().subscribe(todos => {
      expect(todos).toBeTruthy('No courses returned')
      expect(todos.length).toBe(1)
      expect(todos[0].id).toBe(1)
    })

    const req = httpTestingController.expectOne(environment.url)
    expect(req.request.method).toEqual('GET')
    req.flush([todo])
  })

  it('Should get a todo by its id', () => {
    const todo = { id: 1, title: 'Buy Chocolate', completed: false }

    dataService.getById(1).subscribe(todo => {
      expect(todo).toBeTruthy('No courses returned')
      expect(todo.id).toBe(1)
    })

    const req = httpTestingController.expectOne(environment.url + '1')
    expect(req.request.method).toEqual('GET')
    req.flush(todo)
  })

  it('Should save the course data', () => {
    const todo = { id: 1, title: 'Feed Cat', completed: false }
    dataService.put(1, todo).subscribe(todo => {
      expect(todo.id).toEqual(1)
    })

    const req = httpTestingController.expectOne(environment.url + '1')
    expect(req.request.method).toEqual('PUT')
    expect(req.request.body.title).toEqual('Feed Cat')
    req.flush(todo)
  })

  it('Should give an error if save todo fails', () => {
    const todo = { id: 1, title: 'Feed Cat', completed: false }
    dataService.put(1, todo).subscribe(
      () => fail('the save todo failed'),
      (error: HttpErrorResponse) => expect(error.status).toBe(500),
    )

    const req = httpTestingController.expectOne(environment.url + '1')
    expect(req.request.method).toEqual('PUT')
    req.flush('Save course failed', {
      status: 500,
      statusText: 'Interval Server Error',
    })
  })

  afterEach(() => httpTestingController.verify())
})
