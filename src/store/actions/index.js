import * as api from '../../api';

export const getPosts = () => ({
    type: 'GET_POSTS',
    payload: api.getPosts()
})

export const getPostById = (id) =>  ({
    type: 'GET_POST_BY_ID',
    payload: api.getPostById(id)
})