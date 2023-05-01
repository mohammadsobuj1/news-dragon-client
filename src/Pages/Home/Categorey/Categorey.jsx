import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newes from '../Home/Newes/Newes';

const Categorey = () => {
    const { id } = useParams();
    const allCatagoreynews = useLoaderData()
    return (
        <div>
            <h3>All Categorey News :{allCatagoreynews.length}</h3>
            {
                allCatagoreynews.map(news => <Newes
                    key={news._id}
                    news={news}
                />)
            }
        </div>
    );
};

export default Categorey;