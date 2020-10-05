import axios from 'axios';

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
