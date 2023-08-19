import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Insights from '../Insights/Insights';

const News = () => {
    const news = useLoaderData()
    const {
        title,
        details,
        _id,
        image_url,
        category_id,
        author,
        author_image,
        total_view,
        rating
    } = news;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"> <FaArrowLeft></FaArrowLeft> Go Back</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Insights></Insights>
        </div>

    );
};

export default News;