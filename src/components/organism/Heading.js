import React, { memo } from 'react';
import Styled from 'styled-components';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Explore from '../organism/Explore';

const Heading = () => {
    return (
        <HeadingStyle>
            <div className="container">
                <div className="text">
                    <div>
                        <div className="title">
                            <H1 color="white">Explore The World So Easily </H1>
                        </div>
                        <div className="description">
                            <P color="white">We will lead you to enjoy your adventure in exploring the world with ease and fun</P>
                        </div>
                    </div>
                    <div className="explore">
                        <Explore />
                    </div>
                </div>
                <div className="image">
                    <img src="assets/img/image.jpg" alt="surfing" />
                </div>
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
    height: 74.8rem;
    padding: 10.4rem 2.4rem 2.4rem 2.4rem;

    @media(max-width: 72rem) {
        height: auto;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        max-width: 128rem;
        position: relative;
    }

    .text {
        position: relative;
        z-index: 1;

        @media(max-width: 72rem) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            align-items: center;
        }

        @media(max-width: 42rem) {
            flex-direction: column;
            width: 100%;
            align-items : flex-start;
        }
    }

    .image {
        height: 56rem;
        width: 70rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right 0;
        box-shadow: 0 1.5rem 4rem rgba(15,48,87,.1);
        border-radius: 1.8rem;

        @media(max-width: 72rem) {
            display: none;
        }

        img {
            height: 56rem;
        }
    }

    .description {
        margin-top: 1.2rem;
    }

    .explore {
        margin-top: 3.6rem;

        @media(max-width: 72rem) {
            margin: 0;
        }

        @media(max-width: 42rem) {
            margin-top: 2.4rem;
            width: 100%;
        }
    }
`;

export default memo(Heading);