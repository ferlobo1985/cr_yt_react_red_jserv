import axios from 'axios';
import cookie from 'react-cookies';

const URL_SERV = "http://localhost:3004"

export const getPosts = async() => {
    try {
        const response = await axios.get(`${URL_SERV}/posts`);
        return response.data;
    } catch(error){
        throw error;
    }
}



export const getPostById = async(id) => {
    try {
        const response = await axios.get(`${URL_SERV}/posts/${id}`);
        return response.data;
    } catch(error){
        throw error;
    }
}

export const getRelatedPosts = async(data) => {
    try {
        console.log(data)
        const response = await axios.get(`${URL_SERV}/posts?category_like=${data.category}`);
        return response.data;
    } catch(error){
        throw error;
    }
}


export const getPoll = async(id) => {
    try {
        const response = await axios.get(`${URL_SERV}/poll`);
        return response.data;
    } catch(error){
        throw error;
    }
}



export const addVote = async(id,value) => {
    try {
        const addvote = await axios({
            url:`${URL_SERV}/poll/${id}`,
            method:'PATCH',
            data: { votes:value }
        });
        const response = await axios.get(`${URL_SERV}/poll`);
        cookie.save('voted','yes');

        return response.data;
    } catch(error){
        throw error;
    }
}


export const contactUs = async(values) => {
    try {
        const response = await axios({
            url:`${URL_SERV}/contact`,
            method:'POST',
            data: values
        });

        console.log(response.data)
        return response.data;
    } catch(error){
        throw error;
    }
}