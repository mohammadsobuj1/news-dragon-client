import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Newsdetailes = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id } = news;
    return (
        <Card >
          <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
               <Link to={`/categorey/${category_id}`}> <Button variant="danger">All News in This categories </Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Newsdetailes;