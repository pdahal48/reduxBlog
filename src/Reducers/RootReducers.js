import data from '../db.json'
import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from "../Redux/actionTypes";

const INITIAL_STATE = {
    blogPosts: data.Posts,
    postComments: data.blogComments
}

const RootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_POST: {
            console.log(action)
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