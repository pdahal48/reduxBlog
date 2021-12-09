import { ADD_POST, GET_POST, EDIT_POST, DELETE_POST } from "../Redux/actionTypes";

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
            let posts = { ...state }
            delete posts[action.id]
            return posts;
        }

        default: 
            return state;
    }
}