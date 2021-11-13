import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="rounded mx-auto d-block" src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="" />
            <br />
            <Link to="/"><button className="fs-4 font-bold blog-btn">Go Back</button></Link>
        </div>
    );
};

export default NotFound;