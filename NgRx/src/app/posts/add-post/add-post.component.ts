import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm!: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.value);

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      id: ''
    };

    this.store.dispatch(addPost({ post }));
    this.postForm.reset();
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm?.errors?.['required']) {
        return 'Description is required';
      }

      if (descriptionForm?.errors?.['minlength']) {
        return 'Description should be of minimum 10 characters length';
      }
    }
    return null;
  }

}
