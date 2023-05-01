import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const Qzone = () => {
    return (
        <div className='bg-secondary py-3 px-2 mt-3'>
            <h4>Q-ZONE</h4>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
    );
};

export default Qzone;