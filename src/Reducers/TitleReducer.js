import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, GET_COMMENTS} from "../Redux/actionTypes";

function makeTitleFromPost({id, title, description, votes}) {
    return {id, title, description, votes};
  }

export default function RootReducer (state=[], action) {
    switch(action.type) {
        case GET_POSTS: {
           return [...action.titles]
        }
        
        default: 
            return state;
    }
}

