import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import bannerA from '../../../Images/Banner/banner-1.1.png';
import bannerB from '../../../Images/Banner/banner1.2.png';
import bannerC from '../../../Images/Banner/banner1.3.png';

const Banner = () => {
    return (
        <div className="py-3">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={bannerA}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-white fw-bolder">
                        <h3>Explore The Earth To Find Beauty!</h3>
                        <p>Pottery is one of the oldest human inventions, originating before the Neolithic period, with ceramic objects like the Gravettian culture Venus of Folni Vestonice figurine discovered in the Czech Republic.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={bannerB}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-white fw-bolder">
                        <h3>Transforming Earth To Craft!</h3>
                        <p>Clay-based pottery can be divided into three main groups: earthenware, stoneware and porcelain. These require increasingly more specific clay material, and increasingly higher firing temperatures. All three are made in glazed and unglazed varieties, for different purposes. .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={bannerC}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-white fw-bolder">
                        <h3>The Final Polish!</h3>
                        <p>Stoneware is pottery that has been fired in a kiln at a relatively high temperature, from about 1,100 °C to 1,200 °C, and is stronger and non-porous to liquids.[8] The Chinese, who developed stoneware very early on, classify this together with porcelain as high-fired wares. .</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;