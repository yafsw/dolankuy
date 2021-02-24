import React, { memo } from 'react';
import Header from '../layout/Header';
import MainHome from '../layout/MainHome';

const Home = () => {
    return (
        <>
            <Header color="white" />
            <MainHome />
        </>
    );
};

export default memo(Home);