import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


const Header = () => {


    return (
        <>
            <Container>
                <div className='text-center mt-5'>
                    <img src={logo} alt="" />
                    <p className='m-3 font-medium'>Journalism Without Fear or Favour</p>
                    <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
                </div>
                <div className="d-flex">
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi nesciunt laboriosam suscipit provident? Numquam sequi praesentium quo voluptatum earum?
                </Marquee>
                </div>
       
            </Container>
        </>
    );
};

export default Header;