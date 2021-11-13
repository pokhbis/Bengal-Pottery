import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className="container ">
                <div className="pt-5 pb-3 blog-header">

                    <h2 className="fs-3 font-bold ">Our New Arrival/ Blog</h2>
                    <p className="blog-title">Read our blog posts to learn and stay updated about the latest and upcoming beautiful products.</p>
                </div>
                <div className=" container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6  ">
                            <div className="blog-img-position">
                                <img className="blog-img" src="https://i.pinimg.com/originals/b8/cb/c5/b8cbc5e5e2b9688ca7297c2194dbb9df.jpg" alt="" />
                            </div>
                            <div >
                                {/* section-1 */}
                                <h3 className="font-bold">Ball clay</h3>
                                <p className="text-start">A secondary clay moved from the parent rock, ball clay is often mixed with other clays and minerals, organic matter are frequently present. Ball clays commonly exhibit high plasticity and high dry strength..</p>
                                <Link to={'/blog'}><button className="blog-btn">Read More</button></Link>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="blog-img-position">
                                <img className="blog-img" src="https://i.pinimg.com/originals/65/d6/5a/65d65a6a90a155a92b3f828d6eec8382.jpg" alt="" />
                            </div>
                            {/* section-2 */}
                            <h3 className="font-bold">Celadon</h3>
                            <p className="text-start">Stoneware-based glazes containing iron which produce green, grey and grey-blue colours in reduction firing. When used on porcelain, translucency is achieved after thickness of (at most) 1'8 of in.</p>
                            <Link to={'/blog'}><button className="blog-btn">Read More</button></Link>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="blog-img-position">
                                <img className="blog-img" src="https://cdn.shopify.com/s/files/1/0836/2769/files/brown-pottery_600x600.jpg?v=1603623068" alt="" />
                            </div>
                            {/* section-3*/}
                            <h3 className="font-bold">Crawling</h3>
                            <p className="text-start"> A parting and contraction of the glaze on the surface of ceramic ware during drying or firing, resulting in unglazed areas bordered by coalesced glaze. Oftentimes caused by uneven glazing or three or more glaze coats. </p>
                            <Link to={'/blog'}><button className="blog-btn">Read More</button></Link>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="blog-img-position">
                                <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlnZoChRO2dg0rqqsaEBOeR5HBveIblU3tw&usqp=CAU" alt="" />
                            </div>
                            {/* section-4 */}
                            <h3 className="font-bold">Engobe</h3>
                            <p className="text-start">A slip coating applied to a ceramic body for imparting colour, opacity or other characteristics. Sometimes distinguished from slip by the addition of non-clay materials, and sometimes not. It may subsequently be covered with a glaze.</p>
                            <Link to={'/blog'}><button className="blog-btn">Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;