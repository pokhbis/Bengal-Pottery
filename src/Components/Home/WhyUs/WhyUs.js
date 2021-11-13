import React from 'react';
import './WhyUs.css';
import iconA from '../../../Images/animatedimg/handshake-removebg-preview.png';
import iconB from '../../../Images/animatedimg/shop-removebg-preview.png';
import iconC from '../../../Images/animatedimg/client-removebg-preview.png';
import iconD from '../../../Images/animatedimg/experience-removebg-preview.png';

const WhyUs = () => {
    return (
        <div className="why-section">
            <div>
                <div className="pt-5 pb-3">

                    <h2 className="why-title">Bengal Pottery</h2>
                    <h5 className="why-text">What's Special About Bengal Pottery</h5>
                </div>
                <div className="container">
                    <div className="row pb-4 cart-row mx-3">
                        <div className="col-lg-3 col-md-6 icon-cart py-2">
                            <div className="">
                                <img className="icon-size" src={iconA} alt="" />
                            </div>
                            {/* section-1 */}
                            <h4 className="why-text">100% Trusted Seller</h4>
                        </div>

                        <div className="col-lg-3 col-md-6 icon-cart py-2 ">
                            <div className="">
                                <img className="icon-size" src={iconB} alt="" />
                            </div>
                            {/* section-2 */}
                            <h4 className="why-text">200+ Outlets</h4>
                        </div>

                        <div className="col-lg-3 col-md-6 icon-cart ">
                            <div className="">
                                <img className="icon-size" src={iconC} alt="" />
                            </div>
                            {/* section-3*/}
                            <h4 className="why-text">99% Buyer's Satisfaction</h4>
                        </div>

                        <div className="col-lg-3 col-md-6 icon-cart ">
                            <div className="">

                                <img className="icon-size" src={iconD} alt="" />
                            </div>
                            {/* section-4 */}
                            <h4 className="why-text" >5+ Years Experience</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;