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
            const blogPostsCopy = { ...state.blogPosts };
            blogPostsCopy[action.id] = { ...action.post };
            return {
                ...state,
                blogPosts: blogPostsCopy
            }
        }

        case DELETE_POST: {
            const blogPostsCopy = { ...state.blogPosts };
            if (!blogPostsCopy[action.id]) return state;
            delete blogPostsCopy[action.id];
            return {
                ...state,
                blogPosts: blogPostsCopy
            }
        }
        
        default: 
            return state;
    }
}

export default RootReducer;