import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNave = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-3 '>
            <h3 className='text-decoration-underline'>All Categories</h3>
            <div className="mt-3">
                {
                    categories.map(categorey => <p
                        key={categorey.id}
                    >
                        <Link className='text-decoration-none  text-secondary fs-4 fw-semibold' to={`/categorey/${categorey.id}`} >{categorey.name}</Link>
                    </p>)
                }
        </div>
        </div >
    );
};

export default LeftNave;