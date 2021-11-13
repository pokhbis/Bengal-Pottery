import React from 'react';
import './Footer.css';
import logo from '../../../Images/Logo/logo.png';


const Footer = () => {
    return (
        <div>
            <div className="">
                <div className="footer-container mt-5 ">
                    <div className="row">
                        <div className="col-lg-4 d-flex my-3">

                            <div>
                                <img className="footer-logo" src={logo} alt="" />
                            </div>
                            <div>
                                {/* section-1 */}
                                <h5 className="fs-5 fw-bold">All About Bengal Pottery </h5>
                                <p className="footer-description text-start">Bengal Pottery is one of the best pottery maker across the country. We help people to get  their desired pottery products at a reasonable price among our huge collection of products. Thus we are contributing to revive the lost pottery culture of our country.</p>
                            </div>


                        </div>
                        <div className="col-lg-4 pt-4">
                            {/* section-2 */}
                            <h3 className="pb-3 fw-bold">Follow Us</h3>
                            <ul className="footer-social-media">
                                <div className="d-flex justify-content-center">
                                    <div><li> <img className="icon-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" /> </li></div>
                                    <div className="text-start">FaceBook</div>
                                </div>
                                <div className="d-flex justify-content-center py-2">
                                    <div><li> <img className="icon-img" src="https://e1.pngegg.com/pngimages/589/288/png-clipart-clay-os-6-a-macos-icon-twitter-tweeter-icon-thumbnail.png" alt="" /> </li></div>
                                    <div className="text-start">Tweeter</div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div><li> <img className="icon-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncuHUeb1oOQuSdOmfg64FtTQiXAA-zB-L7OmyXjzlpc_jmf954S6UHr7ETO-jf9NMpPw&usqp=CAU" alt="" /> </li></div>
                                    <div className="text-start">Instagram</div>
                                </div>
                            </ul>

                        </div>
                        <div className="col-lg-4 pt-4">
                            {/* section-3 */}
                            <h3 className="fw-bold">Contact Us</h3>
                            <p>Level-4, 34, Lg Tower, New York, USA <br />
                                Official: bengalpottery@gmail.com <br />
                                Helpline : 22810867 (Available : 09:00am to 7:00pm)</p>
                        </div>


                    </div>
                </div>

                <div className="footer-end text-white p-2"> @ 2021. Bengal Pottery By Pokhbis. All Rights Reserved.</div>

            </div>
        </div>
    );
};

export default Footer;