import React,{ useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { getPosts } from '../../store/actions';

const Home = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])

    return(
        <div>
            Home
        </div>
    )
}

export default Home;
