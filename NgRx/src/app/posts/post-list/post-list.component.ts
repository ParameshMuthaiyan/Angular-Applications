import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { deletePost } from '../state/post.action';
import { getPosts } from '../state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts!: Observable<Post[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

  onDeletePost(id: any) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }));
    }
  }

}
