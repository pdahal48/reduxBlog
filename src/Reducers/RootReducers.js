import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, GET_COMMENTS} from "../Redux/actionTypes";

const INITIAL_STATE = {
    blogPosts: {},
    titles: []
}

const RootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_POSTS: {
           return {
               ...state, titles:action.posts
           }
        }

        case GET_POST: {
            return {
                ...state, 
               blogPosts: action.post
            }
        }

        case GET_COMMENTS: {
            return {
                ...state,
                comments: action.comments
            }
        }

        case ADD_POST: {
            return {
                ...state,
                newPost: action.post
            }
        }

        case DELETE_POST: {
            return {
                ...state,
               res: action.res
            }
        }

        case EDIT_POST: {
            return {
                ...state,
                editedPost: action.post_data
            }
        }
        
        case ADD_COMMENT: {
            return {
                ...state,
                text: action.comment
            }
        }

        case DELETE_COMMENT: {
            return {
                ...state,
                res: action.res
            }
        }

        default: 
            return state;
    }
}

export default RootReducer;