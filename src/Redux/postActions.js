import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, GET_COMMENTS, VOTE} from "./actionTypes";
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

export function addComment(post_id, text) {
    return async function (dispatch) {
        const res = await API.addsComment(post_id, text);
        return dispatch(addedComment(post_id, res))
    }
}

export function addedComment(id, comment) {
    return {
        type: ADD_COMMENT,
        id,
        comment
    }
}

export function deleteComment(post_id, comment_id) {
    return async function (dispatch) {
       await API.deletesComment(post_id, comment_id);
        dispatch(deletedComment(post_id, comment_id))
    }
}

export function deletedComment(id, comment_id) {
    return {
        type: DELETE_COMMENT,
        id, 
        comment_id
    }
}

export function sendVoteToAPI(id, direction) {
    return async function(dispatch) {
        const res = await API.sendVote(id, direction);
        return dispatch(vote(id, res.votes))
    }
}

export function vote(id, votes) {
    return {
        type: VOTE,
        id,
        votes: votes
    }
};