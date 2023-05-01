import React from 'react';
import Navigation from '../Navigationbar/Navigation';
import { Outlet } from 'react-router-dom';

const Navigationlayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet />
        </div>
    );
};

export default Navigationlayout;