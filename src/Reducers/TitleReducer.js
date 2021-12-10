import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, GET_COMMENTS, VOTE} from "../Redux/actionTypes";

function sortByVote(posts) {
    return posts.sort((a, b) => b.votes - a.votes);
}

export default function RootReducer (state=[], action) {
    switch(action.type) {
        case GET_POSTS: {
           return [...action.titles]
        }

        case VOTE: {
            return sortByVote(state.map(
                title => title.id === action.id ? {...title, votes: action.votes } : title));
        }
        
        default: 
            return state;
    }
}

