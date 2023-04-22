import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({main}) => {
    console.log(main);
    const {_id, title, image_url ,details, total_view, rating, thumbnail_url,  } = main;
    return (
        <Card className=" mb-3">
        <Card.Header>
            <h5>{title}</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>
          <img className='img-fluid' src={image_url} alt="" />
            </Card.Title>
          <Card.Text>
            {details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}....<Link to={`/news/${_id}`}>read more</Link></>}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default NewsCard;