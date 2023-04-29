import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBookmarkCheck } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { AiFillEye ,AiOutlineStar} from "react-icons/ai";

const NewsCard = ({ main }) => {
    // console.log(main);
    const { _id, title, image_url, details, total_view, rating, thumbnail_url, author } = main;
    return (
        <Card className=" mb-3">
            <Card.Header>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center '>
                        <img className='rounded-circle' style={{ width: '40px', height: '40px' }} src={author.img} alt="" />

                        <div className=''>
                            <h6 className='ms-3 '>{author.name}</h6>
                            <p className='ms-3 '>{moment(author.published_date).format('MMMM Do YYYY,')} </p>
                        </div>
                    </div>
                    <div>
                        <BsBookmarkCheck style={{width:'40px'}} />
                        <FiShare2 />
                    </div>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <h5>{title}</h5>
                </Card.Title>
                <img className='img-fluid ml-2 mb-2' src={image_url} alt="" />


                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}....<Link className='text-warning' to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between'>
                    <h4><AiOutlineStar className='text-warning'/> <AiOutlineStar className='text-warning'/> <AiOutlineStar className='text-warning'/> <AiOutlineStar className='text-warning'/> {rating.number}</h4>
                    <h4> <AiFillEye/> {total_view}</h4>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;