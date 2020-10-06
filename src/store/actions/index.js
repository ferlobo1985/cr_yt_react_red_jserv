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


export const getPoll = () =>  ({
    type: 'GET_POLL',
    payload: api.getPoll()
})

export const addVote = (id,value) =>  ({
    type: 'ADD_VOTE',
    payload: api.addVote(id,value)
})


export const contactUs = (values) =>  ({
    type: 'CONTACT_US',
    payload: api.contactUs(values)
})
