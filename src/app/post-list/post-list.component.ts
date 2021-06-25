import { Component } from '@angular/core'
import { PostService } from '../services/post.service'

@Component({
  selector: 'au-test-post-list',
  template: `
    <div
      class="card"
      data-test="card"
      *ngFor="let post of posts$ | async"
      [style.backgroundImage]="'url(' + post.image + ')'"
    >
      <h2 data-test="title">{{ post.title }}</h2>
      <p data-test="content">{{ post.content }}</p>
      <img [alt]="post.title" data-test="image" hidden />
      <au-test-button
        data-test="button"
        color="secondary"
        (click)="openDialog()"
      >
        GET
      </au-test-button>
    </div>
  `,
  styles: [
    `
      @use "colors";

      :host {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1rem;
      }

      .card {
        border: 1px solid map-get(colors.$primary, 400a);
        border-radius: 8px;
        padding: 1rem;
        background-size: cover;
      }

      p {
        margin: 0.5rem 0 1rem;
      }

      img {
        width: 100%;
      }
    `,
  ],
})
export class PostListComponent {
  posts$ = this.postService.get()

  constructor(private readonly postService: PostService) {}

  openDialog() {
    console.log('hello')
  }
}
