import React,{ useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import cookie from 'react-cookies';
import { ToastContainer, toast } from 'react-toastify';

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
        const getVoteCookie = cookie.load('voted');
        if(getVoteCookie){
            toast('Sorry, you did this already, remember ?',{
                type: toast.TYPE.ERROR,
                position: toast.POSITION.TOP_RIGHT
            })

        } else {
            const value = votes + 1;
            dispatch(addVote(id,value))
        }
    }


    return(
        <div className="poll_container">
            <h3>Who is the winner ?</h3>
            <Row className="justify-content-md-center">
                {renderPoll()}
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default Poll;