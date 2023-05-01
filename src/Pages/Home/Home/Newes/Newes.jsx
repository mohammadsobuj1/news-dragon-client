import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar} from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Newes = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card>
            <Card.Header className='d-flex  align-items-center '>
                <Image style={{ width: '40px' }} src={author ? author.img : ""} roundedCircle />
                <div className="mr-2 flex-grow-1 mb-3">
                    <p className='mb-0 m-3'>{author?.name}</p>
                    <small >   {moment(author?.published_date).format('MMMM Do YYYY')} </small>
                </div>
                <div className="">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />
                <Card.Text>
                    {
                        details.length < 250 ? details : <> {details.slice(0, 250)}....<Link to={`/news/${_id}`}>Read more</Link></>

                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex'>
                <div className="flex-grow-1">
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar className='text-warning'/>}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaRegStar  />} 
                       
                    /> {rating.number}
                   

                </div>
                <div className="" >
                    <FaEye />  {total_view}


                </div>
            </Card.Footer>
        </Card>
    );
};

export default Newes;