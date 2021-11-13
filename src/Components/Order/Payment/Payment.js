import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <h3 className="p-5 order-hearder">Payment Options Coming Soon!</h3>
            <Link to="/dashboard"><button className="fs-4 font-bold blog-btn">Go Back</button></Link>
        </div>
    );
};

export default Payment;