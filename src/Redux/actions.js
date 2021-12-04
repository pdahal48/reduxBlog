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

export function addPost(postData) {
    return async function(dispatch) {
        const post = await API.addsPost(postData);
        dispatch(addedPost(post));
    }
}

export function addedPost(post) {
    return {
        type: ADD_POST,
        post
    }
};

export function deletePost(id) {
    return async function(dispatch) {
        const res = await API.deletesPost(id);
        dispatch(deletedPost(res))
    }
}

export function deletedPost(res) {
    return {
        type: DELETE_POST,
        res
    }
};

export function editPost(id, data) {
    return async function (dispatch) {
        const res = await API.editsPost(id, data);
        dispatch(editedPost(res))
    }
}

export function editedPost(id, post_data) {
    return {
        type: EDIT_POST,
        id,
        post_data
    }
};

export function addComment(post_id, comment) {
    return async function (dispatch) {
        const res = await API.addsComment(post_id, comment);
        dispatch(addedComment(res));
    }
}

export function addedComment(id) {
    return {
        type: ADD_COMMENT,
        id
    }
};

export function deleteComment(post_id, comment_id) {
    return async function (dispatch) {
        const res = await API.deletesComment(post_id, comment_id);
        dispatch(deletedComment(res))
    }
}

export function deletedComment(res) {
    return {
        type: DELETE_COMMENT,
        res
    }
};