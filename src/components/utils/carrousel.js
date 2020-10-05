import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Carrousel = ({posts,limit}) => {

    const renderSlides = () => (
        posts.list ?
            posts.list.map((item,i)=>(
                i <= limit ?
                <Carousel.Item key={i}>
                    <Link to={`/post/${item.id}`}>
                        <div style={{
                            backgroundImage:`url(${item.image})`,
                            height:'550px',
                            backgroundSize:'cover',
                            backgroundPosition:'top center'
                        }}></div>

                       <Carousel.Caption>
                            <h3>{item.title}</h3>
                       </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                :null
            ))

        :null
    )

    return(
        <>
            <Carousel>
                { renderSlides() }
            </Carousel>
        </>
    )

}

export default Carrousel;