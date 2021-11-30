import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export function addPost({id, post}) {
    return {
        type: ADD_POST,
        id,
        post
    }
};

export function deletePost(id) {
    return {
        type: DELETE_POST,
        id
    }
};

export function editPost(id) {
    return {
        type: EDIT_POST,
        id
    }
};

export function addComment(id) {
    return {
        type: ADD_COMMENT,
        id
    }
};

export function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
};