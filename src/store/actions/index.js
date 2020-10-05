import * as api from '../../api';

export const getPosts = () => ({
    type: 'GET_POSTS',
    payload: api.getPosts()
})