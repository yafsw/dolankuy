import React, { memo } from 'react';
import Styled from 'styled-components';
import Experiences from '../components/organism/Experiences';
import Heading from '../components/organism/Heading';
import SpecialDeals from '../components/organism/SpecialDeals';
import Testimonial from '../components/organism/Testimonials';

const MainHome = () => {
    return (
        <MainHomeStyle>
            <Heading />
            <Experiences />
            <SpecialDeals />
            <Testimonial />
        </MainHomeStyle>
    );
}; 

const MainHomeStyle = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default memo(MainHome);