import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Explore from '../organism/Explore';

const Heading = () => {
    return (
        <HeadingStyle>
            <div className="container">
                <H1 color="white">Explore The World So Easily </H1>
                <div className="text">
                    <P color="white">We will lead you to enjoy your adventure in exploring the world with ease and fun</P>
                </div>
                <div className="explore">
                    <Explore />
                </div>
                <P color="white">Popular: Yogyakarta, Lombok, Bali, Borobudur, Wakatobi</P>
            </div>
            <div className="image">
                <img  />
            </div>
        </HeadingStyle>
    );
};

const HeadingStyle = Styled.section`
    width: 100%;
    background-image: url('assets/img/background.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .container {
        margin: 10.4rem 2.4rem 2.4rem 2.4rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        max-width: 128rem;
    }

    .text {
        margin-top: 1.2rem;
    }

    .explore {
        margin: 3.6rem 0;
    }
`;

export default memo(Heading);