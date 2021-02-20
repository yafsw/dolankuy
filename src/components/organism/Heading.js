import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Explore from '../organism/Explore';

const Heading = () => {
    return (
        <HeadingStyle>
            <H1>Explore The World So Easily </H1>
            <div className="text">
                <P>We will lead you to enjoy your adventure in exploring the world with ease and fun</P>
            </div>
            <div className="explore">
                <Explore />
            </div>
            <P>Popular: Yogyakarta, Lombok, Bali, Borobudur, Wakatobi</P>
        </HeadingStyle>
    );
};

const HeadingStyle = Styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 128rem;

    .text {
        margin-top: 1.2rem;
    }

    .explore {
        margin: 2.4rem 0;
    }
`;

export default memo(Heading);