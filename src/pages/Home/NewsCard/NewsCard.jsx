import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    const {
        title,
        details,
        _id,
        image_url,
        author,
        author_image,
        total_view,
        rating
    } = news;
    return (

        <Card className="mb-3">
            <Card.Header className='d-flex align-items-center'>
                <Image src={author.img} className='' style={{ height: '40px' }} roundedCircle />
                <div className='flex-grow-1'>
                    <p className='mb-0 ms-3'>{author?.name}</p>
                    <p className='mb-0 ms-3'><small>{moment(author?.published_date).format('MMMM Do YYYY')}</small></p>
                </div>
                <div className='' >
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt ></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />

                <Card.Text>
                    {
                        details.length < 250
                            ? <>{details}</>
                            : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex">
                <div className=' d-flex align-items-center flex-grow-1'>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating.number}
                        readOnly
                    />
                    <span>{rating.number}</span>
                </div>
                <div >
                    <FaEye className='me-2'></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>

    );
};

export default NewsCard;