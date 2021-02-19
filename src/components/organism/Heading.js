import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Explore from '../organism/Explore';

const Heading = () => {
    return (
        <HeadingStyle>
            <H1>Explore The World <br /> So Easily </H1>
            <P>We will lead you to enjoy your adventure in exploring <br /> the world with ease and fun</P>
            <Explore />
            <P><b>Popular</b> Yogyakarta, Lombok, Bali, Borobudur, Wakatobi</P>
        </HeadingStyle>
    );
};

const HeadingStyle = Styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export default memo(Heading);