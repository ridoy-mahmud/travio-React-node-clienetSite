import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Review from '../Review/Review'
import ServicesForHome from '../ServicesForHome/ServicesForHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesForHome></ServicesForHome>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;