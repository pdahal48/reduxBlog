import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, GET_COMMENTS} from "./actionTypes";
import { BlogAPI as API } from '../API';

export function getPosts() {
    return async function (dispatch) {
        const posts = await API.getPosts();
        dispatch(gotPosts(posts))
    }
}

export function gotPosts(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export function getPost(id) {
    return async function (dispatch) {
        const post = await API.getPost(id);
        dispatch(gotPost(post));
    }
}

export function gotPost(post) {
    return {
        type: GET_POST,
        post
    }
}

export function fetchComments(post_id) {
    return async function (dispatch) {
        const comments = await API.getComments(post_id);
        dispatch(gotComments(comments));
    }
}

export function gotComments(comments) {
    return {
        type: GET_COMMENTS,
        comments
    }
}

// export function addPost({id, post}) {
//     return {
//         type: ADD_POST,
//         id,
//         post
//     }
// };

// export function deletePost(id) {
//     return {
//         type: DELETE_POST,
//         id
//     }
// };

// export function editPost(id) {
//     return {
//         type: EDIT_POST,
//         id
//     }
// };

// export function addComment(id) {
//     return {
//         type: ADD_COMMENT,
//         id
//     }
// };

// export function deleteComment(id) {
//     return {
//         type: DELETE_COMMENT,
//         id
//     }
// };