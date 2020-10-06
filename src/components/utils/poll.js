import React,{ useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import { getPoll, addVote } from '../../store/actions';

const Poll = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPoll())
    },[dispatch]);

    const renderPoll = () => (
        user.poll ?
            user.poll.map((item,i)=>(
                <Col key={i} xs lg="2"
                    onClick={()=> voteHandler( item.id, item.votes )}
                >
                    <span>{item.name}</span>
                    <div>{item.votes}</div>
                </Col>
            ))
        :null
    )

    const voteHandler = (id,votes) => {
        const value = votes + 1;
        dispatch(addVote(id,value))
    }


    return(
        <div className="poll_container">
            <h3>Who is the winner ?</h3>
            <Row className="justify-content-md-center">
                {renderPoll()}
            </Row>
        </div>
    )
}

export default Poll;