import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

import { Todo } from '@models/todo'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  URL = environment.url

  constructor(private http: HttpClient) {}

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL)
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.URL}${id}`)
  }

  save(todo: Todo): Observable<void> {
    return this.http.post<void>(this.URL, todo)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}${id}`)
  }

  put(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.URL}${id}`, todo)
  }
}
