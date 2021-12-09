import PostReducer from './PostReducer'
import TitleReducer from './TitleReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    PostReducer,
    TitleReducer
})