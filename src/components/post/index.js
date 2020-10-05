import React,{ useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import { getPostById } from '../../store/actions';

const Post = (props) => {
    const postId = props.match.params.id;
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();


    const getPostData = () => {
        dispatch(getPostById(postId))
    }

    useEffect( getPostData,[])


    return(
        <Container>
            <Row>
                <Col sm={9}>
                    { posts.activePost ?
                        <div>   
                            <h1 style={{fontSize:'70px'}}>
                                {posts.activePost.title}
                            </h1>
                            <span>Category: <b>{posts.activePost.category}</b></span>
                            <hr/>
                            <div
                                style={{
                                    backgroundImage:`url(${posts.activePost.image})`,
                                    height:'400px',
                                    backgroundSize:'cover',
                                    backgroundPosition:'top center'
                                }}
                            ></div>
                            <div
                                className="mt-4"
                                dangerouslySetInnerHTML={{
                                    __html: posts.activePost.content
                                }}
                            >
                            </div>
                        </div>
                        :null
                    }
                </Col>
                <Col sm={3}>
                    ss
                </Col>
            </Row>
        </Container>
    )
}

export default Post;