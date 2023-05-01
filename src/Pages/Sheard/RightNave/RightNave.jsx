import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNave = () => {
    return (
        <>
            <div >
                <h4 className=' mt-4 font-bold'>Log in With</h4>

                <Button className='mb-3' variant="outline-primary"><FaGoogle /> Log in With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Log in With Github </Button>
            </div>

            <div className="mt-4 ">
                <h4>Found US</h4>
                <ListGroup>
                    <ListGroup.Item className='p-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className="mt-3 ">
                <img src={bg} alt="" />
                <h5 >
                Create an Amazing Newspaper
                </h5>
            </div>
        </>
    );
};

export default RightNave;