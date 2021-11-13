import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css';
const Review = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="pt-5 pb-3">

                        <h2 className="review-title">Our Client's Review</h2>
                        <p className="review-title-text">Find what our clients say about their fantastic experiences and how our products help them to enjoy the beauty of pottery art.
                            <br /> You can also enjoy the beauty of pottery and explore the artistic values of pottery culture.</p>
                    </div>
                    <div className=" container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 blog-card ">
                                <div className="mt-4">
                                    <img className="blog-img" src="https://jooinn.com/images/human-21.jpg" alt="" />
                                </div>
                                {/* section-1 */}
                                <h4 className="why-text">Amazing Artistic Test</h4>
                                <p> It was a wonderful experience. The studio is very pretty, painted beautifully, and well-stocked with pottery pieces that Deeksha and her team have made themselves. </p>
                                <Link to={'/'}><button className="blog-btn mb-2">Read More</button></Link>
                            </div>
                            <div className="col-lg-3 col-md-6 blog-card">
                                <div className="mt-4">
                                    <img className="blog-img" src="https://assets.rbl.ms/26144683/origin.jpg" alt="" />
                                </div>
                                {/* section-2 */}
                                <h4 className="why-text">Was My Fovourite</h4>
                                <p>Fantastic! My friends and I decided to do a pottery class while in town  Clay Botik and we are so happy we did.Would  basics of pottery and have a try or creating something youself.  </p>
                                <Link to={'/'}><button className="blog-btn mb-2">Read More</button></Link>
                            </div>
                            <div className="col-lg-3 col-md-6 blog-card">
                                <div className="mt-4">
                                    <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJzO2mlwOox0U3Q1AwhNLkMkC6-9kCQwcnudAmss-NBrM8V6FCqrZBONiBwbZsm4SAS8&usqp=CAU" alt="" />
                                </div>
                                {/* section-3*/}
                                <h4 className="why-text">Best Pottery Collection</h4>
                                <p>The teacher seemed a little bored with our presence and we’re very good at how to do pottery. No introduction at the start.I don’t think the course I worth it. </p>
                                <Link to={"/"}><button className="blog-btn mb-2">Read More</button></Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Review;