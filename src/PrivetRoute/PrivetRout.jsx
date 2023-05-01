import React, { useContext } from 'react';
import { AuthContext } from '../AuthPovider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRout = ({ children }) => {
    const { user, loader } = useContext(AuthContext)

    const location = useLocation()

    if (loader) {
        return <Spinner animation="border" variant="secondary" />
    }
    
    if (user) {
        return (children)
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>

};

export default PrivetRout;