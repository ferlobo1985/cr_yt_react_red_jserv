import React,{ useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

import { Container, Card, Button } from 'react-bootstrap';

import { getPosts } from '../../store/actions';
import Masonry from 'react-masonry-css';

import Carrousel from '../utils/carrousel';
import Poll from '../utils/poll';

const Home = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])

    const renderPosts = () => (
        posts.list ?
            posts.list.map((item,i)=>(
                <Card key={i}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.excerpt}
                        </Card.Text>

                        <LinkContainer to={`/post/${item.id}`}>
                            <Button variant="light">Read article</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            ))
        :null
    )


    return(
        <Container>
            <div className="mt-3">
                <Carrousel posts={posts} limit={2}/>
            </div>
            

            <div className="mt-3">
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    { renderPosts() }
                </Masonry>
            </div>
            <hr/>
            <Poll/>

        </Container>
    )
}

export default Home;
