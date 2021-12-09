import {GET_POSTS } from "./actionTypes";
import { BlogAPI as API } from '../API';

export function getPosts() {
    return async function (dispatch) {
        const posts = await API.getPosts();
        dispatch(gotPosts(posts))
    }
}

export function gotPosts(titles) {
    return {
        type: GET_POSTS,
        titles
    }
}
