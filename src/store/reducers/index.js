import { combineReducers } from 'redux';
import posts from './posts';
import user from './user';

const appReducers = combineReducers({
    posts,
    user
})

export default appReducers;