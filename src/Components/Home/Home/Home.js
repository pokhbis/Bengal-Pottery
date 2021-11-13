import React from 'react';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Hearder/Header';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <WhyUs></WhyUs>
            <Blog></Blog>
            <Comments></Comments>
            <Footer></Footer>
        </div>
    );
};

export default Home;