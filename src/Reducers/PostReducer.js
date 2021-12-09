import { ADD_POST, GET_POST, EDIT_POST, DELETE_POST, DELETE_COMMENT, ADD_COMMENT } from "../Redux/actionTypes";

export default function RootReducer(state={}, action) {
    let p = state[action.id]

    switch(action.type) {
        case GET_POST: 
            return { 
                ...state, 
                [action.post.id]: action.post
            };

        case ADD_POST: {
            console.log(action)
            return {
                ...state,
                [action.post.id]: {...action.post, comments: []}
            }
        }

        case EDIT_POST: {
            return {
                ...state,
                [action.post.id]: {
                    ...action.post,
                    comments: state[action.post.id].comments
                }
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                [action.post_id]: {...p, comments: p.comments.filter(c => c.id !== action.comment_id)}
            }
        }

        case ADD_COMMENT: {
            return {
                ...state,
                [action.id]: {...p, comments: [...p.comments, action.comment]}
            }
        }

        case DELETE_COMMENT: {
            return {
                ...state,
                [action.id]: {
                    ...p, comments: p.comments.filter(c => c.id !== action.comment_id)
                }
            }
        }

        default: 
            return state;
    }
}