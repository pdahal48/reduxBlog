import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, GET_COMMENTS} from "./actionTypes";
import { BlogAPI as API } from '../API';

export function getPost(id) {
    return async function (dispatch) {
        const post = await API.getPost(id);
        return dispatch(gotPost(post))
    }
}

export function gotPost(post) {
    return {
        type: GET_POST,
        post
    }
}

export function addPost(title, body, description) {
    return async function(dispatch) {
        const postData = {
            title,
            body,
            description
        }
        const post = await API.addsPost(postData);
        return dispatch(addedPost(post));
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
        await API.deletesPost(id);
        dispatch(deletedPost(id))
    }
}

export function deletedPost(id) {
    return {
        type: DELETE_POST,
        id
    }
};

export function editPost(id, title, description, body) {
    const postData = {
        title,
        body,
        description
    }
    return async function (dispatch) {
        const res = await API.editsPost(id, title, body, description);
        console.log(res)
        dispatch(editedPost(res))
    }
}

export function editedPost(post) {
    return {
        type: EDIT_POST,
        post
    }
};

// export function deleteComment(post_id, comment_id) {
//     return async function (dispatch) {
//         const res = await API.deletesComment(post_id, comment_id);
//         dispatch(deletedComment(res))
//     }
// }

// export function deletedComment(res) {
//     return {
//         type: DELETE_COMMENT,
//         res
//     }
// };