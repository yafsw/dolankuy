import React, { memo, useState, useEffect } from 'react';
import Header from '../layout/Header';
import MainHome from '../layout/MainHome';
import { useApp } from '../context';
import Footer from '../layout/Footer';

const Home = () => {
    const { state } = useApp();
    const [scroll, setScroll] = useState('transparent');

    useEffect(() => {
        window.onscroll = () => {
            document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 || state.bar
                ? setScroll('black')
                : setScroll('transparent')
        };

        const background = () => {
            state.bar && setScroll('black')
        };
        background();
    }, [state.bar]);

    return (
        <>
            <Header color="white" background={scroll} />
            <MainHome />
            <Footer />
        </>
    );      
};

export default memo(Home);