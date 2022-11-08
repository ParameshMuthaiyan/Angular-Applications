import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { PostState } from "./post.state";

export const POST_STATE_NAME ='posts';

const getPostsState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
});

export const getPostById = createSelector(getPostsState, (state: { posts: any[]; }, props: { id: any; }) => {
    return state.posts.find((post: { id: any; }) => post.id === props.id);
  });