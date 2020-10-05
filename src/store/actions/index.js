import * as api from '../../api';

export const getPosts = () => ({
    type: 'GET_POSTS',
    payload: api.getPosts()
})

export const getPostById = (id) =>  ({
    type: 'GET_POST_BY_ID',
    payload: api.getPostById(id)
})

export const getRelatedPosts = (data) =>  ({
    type: 'GET_RELATED_POSTS',
    payload: api.getRelatedPosts(data)
})

export const clearPost = () =>  ({
    type: 'CLEAR_POST',
    payload: null
})
