import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { of } from 'rxjs'
import { PostService } from '../services/post.service'

import { PostListComponent } from './post-list.component'

describe('PostListComponent', () => {
  let component: PostListComponent
  let fixture: ComponentFixture<PostListComponent>
  let postServiceSpy: any

  const posts = of([
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
  ])

  beforeEach(async () => {
    postServiceSpy = jasmine.createSpyObj('PostService', ['get'])
    postServiceSpy.get.and.returnValue(posts)

    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      providers: [{ provide: PostService, useValue: postServiceSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render a card with title, content and image', () => {
    const card = fixture.nativeElement.querySelector('[data-test="card"]')
    const title = card.querySelector('[data-test="title"]')
    const content = card.querySelector('[data-test="content"]')
    const image = card.querySelector('[data-test="title"]')
    const button = card.querySelector('[data-test="title"]')
    expect(card).toBeTruthy()
    expect(title).toBeTruthy()
    expect(content).toBeTruthy()
    expect(image).toBeTruthy()
    expect(button).toBeTruthy()
  })
})
