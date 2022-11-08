import { Action, createReducer, on } from '@ngrx/store';
import { addPost, deletePost, updatePost } from './post.action';
import { initialState, PostState } from './post.state';

const _postReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post],
        };
    }),
    
    on(updatePost, (state, action) => {
        const updatedPost = state.posts.map((post) => {
            return action.post.id == post.id ? action.post : post;
        });
        return {
            ...state,
            posts: updatedPost,
        };
    }),
    on(deletePost, (state, { id }) => {
        const updatedPosts = state.posts.filter((post) => {
          return post.id !== id;
        });
    
        return {
          ...state,
          posts: updatedPosts,
        };
      })
);

export function postReducer(state: PostState | undefined, action: Action) {
    return _postReducer(state, action);
}