import { HttpClient } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs'
import { PostService } from './post.service'

describe('PostService', () => {
  let service: PostService
  const posts = [
    {
      title: 'Post1',
      content: 'Lorem Ipsum',
      image:
        'https://images.unsplash.com/photo-1624138124267-fca0ef0cd8aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: 'Post2',
      content: 'Lorem Ipsum',
      image:
        'https://images.unsplash.com/photo-1624138124267-fca0ef0cd8aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: 'Post3',
      content: 'Lorem Ipsum',
      image:
        'https://images.unsplash.com/photo-1624138124267-fca0ef0cd8aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(PostService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return a list of posts', () => {
    const http = TestBed.inject(HttpClient)
    spyOn(http, 'get').and.returnValue(of(posts))

    const spy = jasmine.createSpy('spy')

    service.get().subscribe(spy)

    expect(spy).toHaveBeenCalledWith(posts)
    expect(http.get).toHaveBeenCalledWith('assets/posts.json')
  })
})
